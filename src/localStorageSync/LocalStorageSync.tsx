import { useLocalStorage } from './useLocalStorage';
import { useCounter } from './useCounter';
import { useEffect, useState } from 'react';

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSync() {
    const [initial, setInitial] = useState(0);
    const {readItem, updateItem} = useLocalStorage(STORAGE_KEY, initial)

    useEffect(() => {
        const dataFromStorage = readItem()
        setInitial(dataFromStorage)
    }, [])

    const {stateCount, increase, decrease} = useCounter(DELTA, () => {
       return readItem()
    })


    useEffect(() => {
        
        updateItem(stateCount)}, [stateCount])


    return (<>
   
            {increase && <button onClick={increase}>{`+${DELTA}`}</button>}
            {decrease && <button onClick={decrease}>{`-${DELTA}`}</button>}
             </>
    );
}
