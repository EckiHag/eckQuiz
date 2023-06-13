import logo from "../logo.svg"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Quiz</p>
          <p>ohne MongoAtlas</p>
          <Footer />
        </header>
      </div>
    </>
  )
}
