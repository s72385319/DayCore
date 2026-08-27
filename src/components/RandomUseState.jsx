import { useState } from 'react'

function RandomPrediction() {
  const [randomPrediction, setRandomPrediction] = useState("You can generate a prediction here :)")
    
  const randomChoiсe = () => {
    const prediction = [
      "Today is the perfect day for a fresh start.",
      "A little bit of joy is on its way to you.", 
      "Trust your intuition; it won't let you down.",
      "Your smile today will open any door.",
      "The evening will bring some unexpected but pleasant news.",
      "It's time to get rid of everything that's unnecessary and old.",
      "Today, you'll find yourself in the right place."
    ]
    const randomPrediction = prediction[Math.floor(Math.random() * prediction.length)]
    setRandomPrediction(randomPrediction)
  }

    return (
      <>
      <h2>{randomPrediction}</h2>
        <div className="predictionClass">
          <button
            onClick={randomChoiсe}
            className='btnRandom'>Generate prediction
          </button>
        </div>
      </>
    
    )
}

export default RandomPrediction