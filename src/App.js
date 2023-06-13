import "./App.css"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Frage from "./pages/Frage"
import ObjectFrage from "./pages/ObjectFrage"
import QuizComponent from "./pages/QuizComponent"
import Thesomat from "./pages/Thesomat"
import Provakomat from "./pages/Provakomat"
import Objectquiz from "./pages/Objectquiz"
import { Route, Routes } from "react-router-dom"
// import cors from "cors"

export default function App() {
  // App.use(cors())

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizComponent />} />
          <Route path="/frage" element={<Frage />} />
          <Route path="/objectfrage" element={<ObjectFrage />} />
          <Route path="/thesomat" element={<Thesomat />} />
          <Route path="/provakomat" element={<Provakomat />} />
          <Route path="/objectquiz/:quizParamsName" element={<Objectquiz />} />
          <Route path="/objectquiz" element={<Objectquiz />} />
        </Routes>
      </div>
    </>
  )
}
