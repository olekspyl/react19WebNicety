import { useEffect, useState } from 'react'

export const useCounter = (delta: number, initValue: number | null, onChange?: (value: number) => void) => {
const [count, setCount] = useState<number>(initValue)

const increase = () => {
    setCount((prev) =>{
        const newValue = prev + delta;
        onChange?.(newValue);
        return newValue
    })
}

const decrease = () => {
    setCount((prev) => 
        {
            const newValue = prev - delta;
        onChange?.(newValue)
        return newValue
        })
}

useEffect(() => {
    onChange?.(count);
  }, [count]);

return {count, increase, decrease}
}
