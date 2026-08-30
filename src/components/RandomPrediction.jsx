import { useState } from 'react'

function RandomPrediction() {
  const [randomPrediction, setRandomPrediction] = useState("You can generate a prediction here :)")
    
  const randomChoice = () => {
    const predictions = [
      "Today is the perfect day for a fresh start.",
      "A little bit of joy is on the way to you.", 
      "Trust your intuition, it won't let you down.",
      "Your smile today will open any door.",
      "The evening will bring some unexpected but pleasant news.",
      "It's time to clear out the old to make room for the new.",
      "Today, you'll find yourself in the right place.",
      "Allow yourself to rest — today is a time for small joys.",
      "Your efforts will soon pay off threefold — keep up the good work.",
      "Take the first step toward your big goal today."
    ];
    setRandomPrediction(predictions[Math.floor(Math.random() * predictions.length)])
  }

    return (
      <>
      <h2>{randomPrediction}</h2>
        <button
          onClick={randomChoice}
          className='btnRandom'>Generate prediction
        </button>
      </>
    )
}

export default RandomPrediction