import React, { useState, useEffect } from "react"
import { Footer } from "../components/Footer"
import "./Provakomat.css"
import { provokationen } from "./Provokationen"

function Provakomat() {
  const [these, setThese] = useState()

  useEffect(() => {
    setThese(generiereThese())
  }, [])

  const generiereThese = () => {
    const strSubjekt = provokationen[Math.floor(Math.random() * provokationen.length)]

    return strSubjekt
  }

  const handleNeueThese = () => {
    setThese(generiereThese())
  }

  return (
    <>
      <div className="quiz-container">
        <h1 className="quiz-header">Provokationen</h1>
        <div className="these">{these}</div>
        <br></br>
        <button className="btnNeueThese" onClick={() => handleNeueThese()}>
          Neue Provokation
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Provakomat
