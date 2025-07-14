import { cloneDeep, merge } from "lodash";
import { useState } from "react";
import type { DeepPartial } from "tsdef";

function validatePositiveNumber(stringValue: string): number | null {
  if (!stringValue) {
    return null;
  }
  return Math.max(parseInt(stringValue), 0);
}

type useFieldState<T> = [T, (changes: DeepPartial<T>) => void]

export const useFieldState = <T>(initValue: T): useFieldState<T> => {
  const [state, setState] = useState<T>(initValue);

  const mergeState = (changes: DeepPartial<T>) => {
    setState((prevState) => {
        const clone = cloneDeep(prevState)
        const keys = Object.keys(changes) as (keyof T)[]
        const key = keys[0]
        const value = changes[key]
let validatedValue
        if (typeof value === 'string') {
            validatedValue = validatePositiveNumber(value)
        } 
      const updated = { [key]: validatedValue } as DeepPartial<T>;
        return merge(clone, updated)
    })
  }
console.log('state is new')
  return [state, mergeState]
};
// type useFieldState<T> = [T, (changes: DeepPartial<T>) => void];
