import React, { useState, useEffect } from "react"

import "./QuizComponent.css"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"

function QuizComponent() {
  const [clickedCells, setClickedCells] = useState(() => {
    const storedClickedCells = localStorage.getItem("clickedCellsQuizComponent")
    return storedClickedCells ? JSON.parse(storedClickedCells) : []
  })

  useEffect(() => {
    localStorage.setItem("clickedCellsQuizComponent", JSON.stringify(clickedCells))
  }, [clickedCells])

  const handleClick = (i, j) => {
    const newClickedCells = [...clickedCells]
    newClickedCells.push([i, j])
    setClickedCells(newClickedCells)
  }

  const handleReset = () => {
    localStorage.removeItem("clickedCells")
    setClickedCells([])
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quiz</h1>
      <table className="quiz-table">
        <thead>
          <tr>
            <th></th>
            <th>Theodizee</th>
            <th>Bibel</th>
            <th>Freiheit</th>
            <th>Schule</th>
            <th>Jesus</th>
            <th>Liebe</th>
            <th>Buntes</th>
            <th>Scherzen</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, i) => (
            <tr key={i}>
              <td>{20 + i * 20}</td>
              {[...Array(8)].map((_, j) => (
                <td key={j} className={clickedCells.some((cell) => cell[0] === i && cell[1] === j) ? "clicked" : ""} onClick={() => handleClick(i, j)}>
                  <Link to={`/frage?index=${i * 8 + j}`}>&#128640;</Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <button className="buttonReset" onClick={() => handleReset()}>
          Reset
        </button>
      </table>
      <Footer />
    </div>
  )
}

export default QuizComponent
