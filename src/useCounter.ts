import { useState } from "react"


export type useCounter = (initialValue: number, delta: number) => {
    value: number,
    increase: () => void,
    decrease: () => void,
}


export const useCounter = (initialValue = 0, delta = 1): useCounter => {
    const [value, setValue] = useState<number>(initialValue)

    const increase = () => setValue(prev => prev + delta)
    const decrease = () => setValue(prev => prev - delta)
    
    return {
        value,
        increase,
        decrease
    }
}