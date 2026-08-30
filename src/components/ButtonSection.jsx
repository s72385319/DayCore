import Button from "./Button/Button"
import { useState } from "react"
import { differences } from "../data"

export default function ButtonSection() {
  const [ content, setContent ] = useState(null)
  function handleClick(type) {
    setContent(type)
  }

  return (
    <>
      <section>
        <Button isActive={content == "ways"} onPress={() => handleClick("ways")}>Contacts</Button>
        <Button isActive={content == "easy"} onPress={() => handleClick("easy")}>Version</Button>
        <Button isActive={content == "program"} onPress={() => handleClick("program")}>Information</Button>
      </section>

      <div style={{
        fontFamily: "monospace",
        textAlign: "center",
        marginTop: "80px",
        transform: "translateX(80px)",
      }}>
        {content ? <pre>{differences[content]}</pre> : "Click the button."}
      </div>   
    </>
  )
}
