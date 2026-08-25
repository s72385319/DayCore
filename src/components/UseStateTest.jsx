import { useState } from 'react'

function CountDate({day, week}) {
  const [count, setCount] = useState(Number(day))
  const [countW, setCountW] = useState(Number(week))
    

  const addDay = () => {

    if (count < 7) {
      setCount(prev => prev + 1);
    } else {
      setCount(1);
    
        if (countW < 3) {
          setCountW(prev => prev + 1);
        } else {
          setCountW(1);
        }
      }
  };

    return (
      <>
        <h1>Day: {count}</h1>
        <h1>Week: {countW}</h1>
        <button id='btnDayCount' onClick={addDay}>Add a day!</button>
      </>
    )
}

export default CountDate