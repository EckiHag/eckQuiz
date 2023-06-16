import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "./Objectquiz.css"
import { Footer } from "../components/Footer"
import { fragenCurrent } from "../fragen/FragenCurrent"
import { klasse5Verschiedene } from "../fragen/Klasse5Verschiedene"
import { klasse7Verschiedene } from "../fragen/Klasse7Verschiedene"
import { klasse9Verschiedene } from "../fragen/Klasse9Verschiedene"
import { klasse11Q1Verschiedene } from "../fragen/Klasse11Q1Verschiedene"
import { Link } from "react-router-dom"

export default function Objectquiz() {
  const { quizParamsName } = useParams()
  console.log("quizParamsName: ", quizParamsName)

  // useEffect(() => {
  //   console.log("useEffect reached")
  //   const fetchData = async () => {
  //     try {
  //       const module = await import(`../fragen/${quizName}`)
  //       const fragenUndAntwortenData = module.fragenUndAntworten
  //       setFragenUndAntworten(fragenUndAntwortenData)
  //     } catch (error) {
  //       console.log("error in fetchData: ", error)
  //     }
  //   }

  //   fetchData()
  // }, [quizName]) // Empty dependency array

  let fragenUndAntworten
  let quizName
  let titel
  if (!quizParamsName) {
    quizName = "fragenCurrent"
    fragenUndAntworten = fragenCurrent
    titel = "Default"
  } else {
    quizName = quizParamsName
    switch (quizName) {
      case "fragenCurrent":
        fragenUndAntworten = fragenCurrent
        titel = "Default"
        break
      case "klasse5Verschiedene":
        fragenUndAntworten = klasse5Verschiedene
        titel = "für Klasse 5"
        break
      case "klasse7Verschiedene":
        fragenUndAntworten = klasse7Verschiedene
        titel = "für Klasse 7"
        break
      case "klasse9Verschiedene":
        fragenUndAntworten = klasse9Verschiedene
        titel = "für Klasse 9"
        break
      case "klasse11Q1Verschiedene":
        fragenUndAntworten = klasse11Q1Verschiedene
        titel = "für Q1"
        break
      default:
      // Code, der ausgeführt wird, wenn ausdruck keinem der vorherigen Werte entspricht
    }
  }

  console.log("fragenUndAntworten in ObjectQuiz: ", fragenUndAntworten)

  const themenAnzahl = fragenUndAntworten.length // gibt die Anzahl der Themen zurück
  const themenNamen = fragenUndAntworten.map((thema) => Object.keys(thema)[0]) // gibt ein Array mit den Namen der Themen zurück

  const [clickedCells, setClickedCells] = useState(() => {
    const storedClickedCells = localStorage.getItem("clickedCellsObjectquiz")
    return storedClickedCells ? JSON.parse(storedClickedCells) : []
  })

  useEffect(() => {
    localStorage.setItem("clickedCellsObjectquiz", JSON.stringify(clickedCells))
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
  //i = gewählte Zeile und j = gewählte Spalte/Thema

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quiz {titel}</h1>
      <table className="quiz-table">
        <thead>
          <tr>
            <th></th>
            {themenNamen.map((themaName) => (
              <th key={themaName}>{themaName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, i) => (
            <tr key={i}>
              <td>{20 + i * 20}</td>
              {[...Array(themenAnzahl)].map((_, j) => (
                <td key={j} className={clickedCells.some((cell) => cell[0] === i && cell[1] === j) ? "clicked" : ""} onClick={() => handleClick(i, j)}>
                  <Link to={`/objectfrage?spalte=${j}&zeile=${i}&quizname=${quizName}`} className="symbol">
                    <img src="../icons/Rocket.png" alt="EditPencil-square" />
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="buttonReset" onClick={() => handleReset()}>
        Reset
      </button>
      <Footer />
    </div>
  )
}
