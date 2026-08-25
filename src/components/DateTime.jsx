import { useState } from "react"

export default function DateTime() {
    const [now, setNow] = useState(new Date()) 
    setInterval(() => setNow(new Date()), 1000)
    
    return (
      <p className="timeNow">
        time now ─ <b>{ now.toLocaleTimeString() }</b><br />
        date now ─ <b>{ now.toLocaleDateString() }</b>
      </p>
    )
}