import CountDate from "./components/UseStateTest"
import RandomPrediction from "./components/RandomUseState"
import Button from "./components/Button/Button"
import DateTime from "./components/DateTime"
import File from "./components/FileImg"
import { useState } from "react"
import { ways, differences } from "./data"

function WayToTeach({ title, description }) {
  return (
    <li>
      <p className="microchoice">
        <strong>{ title }</strong> {description}
      </p>
    </li>
  )
}

// const promptName = prompt("Enter your name here: ") // цей спосіб треба переробити на більш сучасніший 

const user = {
  // name: promptName ? promptName : "NoName",
  imgUrl: "src/assets/photo_2025-02-20_17-13-28.jpg"
}

const Profile = () => {
    return (
    <>
      {/* <h1>Hi, {user.name}!</h1> */}
      <File imgNone={user.imgUrl} />
    </>
  )
}

function App() {

  console.log("App Component Render")
  
  const [ content, setContent ] = useState(null)
  function handleClick(type) {
    console.log("button clicked", type)
    setContent(type)
  }

  return (
    <div>
      <header className="headerClass">
        <Profile />
      </header>
      <DateTime />
      
      <main className="mainClass">
        <section id="center">
          <CountDate day="0" week="0" />
          <RandomPrediction />
        </section>
        
        <ul className="ways">
          {ways.map(ways => <WayToTeach key={ways.title} {...ways} />)}
        </ul>
        
        <Button isActive={content == "ways"} onPress={() => handleClick("ways")}>Contacts</Button>
        <Button isActive={content == "easy"} onPress={() => handleClick("easy")}>Version</Button>
        <Button isActive={content == "program"} onPress={() => handleClick("program")}>Information</Button>
        <div style={{
          fontFamily: "monospace",
          textAlign: "center",
          marginTop: "80px",
          transform: "translateX(80px)",
        }}>{content ? <pre>{differences[content]}</pre> : "Click the button."}</div>
      </main>
    </div>
  )
}

export default App