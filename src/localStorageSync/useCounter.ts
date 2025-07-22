import { useState } from 'react'

export const useCounter = (delta: number, initValue: number | null) => {
    const [stateCount, setStateCount] = useState<number>(initValue ?? 0)


  const increase = () => setStateCount((value) => (value || 0) + delta);
      const decrease = () => setStateCount((value) => (value || 0) - delta);
    
      return {
        stateCount, increase, decrease
      }
}
