import { useState } from "react"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
import "./ObjectFrage.css"
import { useLocation } from "react-router-dom"
import { antwortenRichtig } from "../antworten/antwortenRichtig"
import { antwortenFalsch } from "../antworten/antwortenFalsch"
import { fragenCurrent } from "../fragen/FragenCurrent"
import { klasse5Verschiedene } from "../fragen/Klasse5Verschiedene"
import { klasse7Verschiedene } from "../fragen/Klasse7Verschiedene"
import { klasse9Verschiedene } from "../fragen/Klasse9Verschiedene"
import { klasse11Q1Verschiedene } from "../fragen/Klasse11Q1Verschiedene"
import { jokerGifs } from "../antworten/jokerGifs"

export default function ObjectFrage() {
  const location = useLocation()

  console.log("location: ", location)
  const spalte = new URLSearchParams(location.search).get("spalte")
  const zeile = new URLSearchParams(location.search).get("zeile")
  const quizName = new URLSearchParams(location.search).get("quizname")

  let quizNameRedirect
  let fragenUndAntworten
  if (!quizName) {
    fragenUndAntworten = fragenCurrent
    quizNameRedirect = "fragenCurrent"
  } else {
    quizNameRedirect = quizName
    switch (quizName) {
      case "fragenCurrent":
        fragenUndAntworten = fragenCurrent
        break
      case "klasse5Verschiedene":
        fragenUndAntworten = klasse5Verschiedene
        break
      case "klasse7Verschiedene":
        fragenUndAntworten = klasse7Verschiedene
        break
      case "klasse9Verschiedene":
        fragenUndAntworten = klasse9Verschiedene
        break
      case "klasse11Q1Verschiedene":
        fragenUndAntworten = klasse11Q1Verschiedene
        break
      default:
      // Code, der ausgeführt wird, wenn ausdruck keinem der vorherigen Werte entspricht
    }
  }

  const themenNamen = fragenUndAntworten.map((thema) => Object.keys(thema)[0]) // gibt ein Array mit den Namen der Themen zurück
  console.log("themenNamen: ", themenNamen)
  const [showAnswer, setShowAnswer] = useState(false)
  const [message1, setMessage1] = useState(null)
  const [message2, setMessage2] = useState(null)

  const handleOptionClick = (choosenNumber, rightNumber) => {
    const rightAnswerText = fragenUndAntworten[spalte][titel][item].options[rightNumber - 1]
    const antwortRichtig = antwortenRichtig[Math.floor(Math.random() * antwortenRichtig.length)]
    const antwortFalsch = antwortenFalsch[Math.floor(Math.random() * antwortenFalsch.length)]
    if (choosenNumber == rightNumber) {
      setMessage1(`${antwortRichtig}`)
      setMessage2(`"${rightAnswerText}" ist richtig!`)
    } else {
      setMessage1(`${antwortFalsch}`)
      setMessage2(`"${rightAnswerText}" ist richtig!`)
    }
    setShowAnswer(true)
    console.log("choosenNumber: ", choosenNumber)
    console.log("rightNumber: ", rightNumber)
  }

  const titel = themenNamen[spalte]
  const item = zeile

  const jokerGif = jokerGifs[Math.floor(Math.random() * jokerGifs.length)]

  if (fragenUndAntworten[spalte][titel][item].question === "Joker") {
    return (
      <>
        <header className="App">
          <div className="containerContent">
            <div className="question-title">Joker</div>
            <div className="question-joker">
              <img src={`${jokerGif}`} alt="Ein lustiges GIF" />
              {/* <img src={`${fragenUndAntworten[spalte][titel][item].answer}`} alt="Ein lustiges GIF" /> */}
            </div>
            <Link to={`/objectquiz/${quizNameRedirect}`}>
              <button className="btnGoToQuiz">Go to quiz</button>
            </Link>
          </div>
        </header>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <header className="App">
          <div className="containerContent">
            <div className="question-title">Frage: {fragenUndAntworten[spalte][titel][item].question}</div>
            <div className="option">
              <button id="answer1" className={`buttonAnswer ${showAnswer ? "hidden" : ""}`} onClick={() => handleOptionClick(1, fragenUndAntworten[spalte][titel][item].answer)}>
                A = {fragenUndAntworten[spalte][titel][item].options[0]}
              </button>
              <button id="answer2" className={`buttonAnswer ${showAnswer ? "hidden" : ""}`} onClick={() => handleOptionClick(2, fragenUndAntworten[spalte][titel][item].answer)}>
                B = {fragenUndAntworten[spalte][titel][item].options[1]}
              </button>
              <button id="answer3" className={`buttonAnswer ${showAnswer ? "hidden" : ""}`} onClick={() => handleOptionClick(3, fragenUndAntworten[spalte][titel][item].answer)}>
                C = {fragenUndAntworten[spalte][titel][item].options[2]}
              </button>
              <button id="answer4" className={`buttonAnswer ${showAnswer ? "hidden" : ""}`} onClick={() => handleOptionClick(4, fragenUndAntworten[spalte][titel][item].answer)}>
                D = {fragenUndAntworten[spalte][titel][item].options[3]}
              </button>
            </div>
            {showAnswer && (
              <div>
                <p className="answer-info-spruch">{message1}</p>
                <p className="answer-info">{message2}</p>
              </div>
            )}
            <Link to={`/objectquiz/${quizNameRedirect}`}>
              <button className="btnGoToQuiz">Go to quiz</button>
            </Link>
          </div>
        </header>
        <Footer />
      </>
    )
  }
}
