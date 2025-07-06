import { useState } from "react"

export const BasicState = () => {
    const VAR = [1,1]
    const [increment, setIncrement] = useState<number>(0)
    const [FIBONACCI, setFIBONACCI] = useState<number[]>(VAR) 

const fibonacciHandler = (): void => {
    const copy = [...FIBONACCI]
    const lastIndex = copy.length-1
    copy.push(copy[lastIndex] + copy[lastIndex - 1])
setFIBONACCI(copy)
}

 type Counter = (action: 'plus' | 'minus') => void


    const incrementCounter: Counter = (action) => {
        if(action === 'plus') {
        setIncrement(increment+1)
        } else {
        setIncrement(increment-1)
        }

    }



  return (
    <div>
        <button onClick={() =>incrementCounter('plus')}>Click on me to increment</button>
        <p>increment number {increment}</p>
        <button onClick={() => incrementCounter('minus')}>Click on me to decrement</button>

        <button onClick={fibonacciHandler}> cLICK to now fibon</button>
        <div>Fibonacci row : {FIBONACCI.join(',')}</div>
    </div>
  )
}
