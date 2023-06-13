import { useState } from "react"
import { fragenUndAntworten } from "./FragenUndAntworten"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
import "./Frage.css"

import { useLocation } from "react-router-dom"

export default function Frage() {
  const location = useLocation()
  console.log("location.state: ", location.state)

  const index = new URLSearchParams(location.search).get("index")

  const [showAnswer, setShowAnswer] = useState(false)

  const spalten = 8
  // const { index } = useParams()
  console.log("index: ", index)
  const spalte = index % spalten
  const zeile = Math.floor(index / spalten)

  if (fragenUndAntworten[spalte][zeile].question === "Joker") {
    return (
      <>
        <div className="App">
          <header className="containerContent">
            <div className="question-title">Joker</div>
            <Link to="/quiz">
              <button className="btnGoToQuiz">Go to quiz</button>
            </Link>
          </header>

          <Footer />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="App">
          <header className="containerContent">
            <div className="question-title">Frage: {fragenUndAntworten[spalte][zeile].question}</div>
            <div className="option">
              <p className="option">(0): {fragenUndAntworten[spalte][zeile].options[0]}</p>
              <p className="option">(1): {fragenUndAntworten[spalte][zeile].options[1]}</p>
              <p className="option">(2): {fragenUndAntworten[spalte][zeile].options[2]}</p>
            </div>

            <p className={`answer-info ${showAnswer ? "" : "hidden"}`}>Richtig ist: {fragenUndAntworten[spalte][zeile].answer}</p>
            <button className={`buttonAnswer ${showAnswer ? "hidden" : ""}`} onClick={() => setShowAnswer(true)}>
              Antwort anzeigen
            </button>
            <br></br>
            <Link to="/quiz">
              <button className="btnGoToQuiz">Go to quiz</button>
            </Link>
          </header>

          <Footer />
        </div>
      </>
    )
  }
}
