import { useState } from "react"
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import type { DeepPartial } from "tsdef"

type useMergeState<T> = [T, (changes: DeepPartial<T>) => void]


export const useMergeState = <T>(initialState: T): useMergeState<T> => {
    const [state, setState] = useState(initialState);

    const mergeState = (changes: DeepPartial<T>) => {
        setState((prevState) => {
            const clone = cloneDeep(prevState);
            const merged = merge(clone, changes);
            return merged
        }
        )
    }
    return [state, mergeState]
}