import React, { useState, useEffect } from "react"
import { Footer } from "../components/Footer"
import "./Thesomat.css"
import { thesenteile } from "./Thesenteile"

function Thesomat() {
  const [these, setThese] = useState()

  useEffect(() => {
    setThese(generiereThese())
  }, [])

  const generiereThese = () => {
    const strSubjekt = thesenteile.subjekt[Math.floor(Math.random() * thesenteile.subjekt.length)]
    const strAdverb = thesenteile.adverb[Math.floor(Math.random() * thesenteile.adverb.length)]
    const strConclusion = thesenteile.conclusion[Math.floor(Math.random() * thesenteile.conclusion.length)]

    return strSubjekt + " " + strAdverb + " " + strConclusion + "."
  }

  const handleNeueThese = () => {
    setThese(generiereThese())
  }

  return (
    <>
      <div className="quiz-container">
        <h1 className="quiz-header">Thesomat</h1>
        <div className="these">{these}</div>
        <br></br>
        <button className="btnNeueThese" onClick={() => handleNeueThese()}>
          Neue These
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Thesomat
