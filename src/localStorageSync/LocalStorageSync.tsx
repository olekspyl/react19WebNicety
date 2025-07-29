import { useLocalStorage } from './useLocalStorage';
import { useCounter } from './useCounter';
import { useEffect, useState } from 'react';

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSync() {
    const [init, setInit] = useState<number>(0)
   const {readItem, updateItem} = useLocalStorage(STORAGE_KEY, init)

useEffect(() => {
const result = readItem()
setInit(result)
}, [])

const {count, increase, decrease} = useCounter<number>(DELTA, init, () => updateItem())

useEffect(() => {
    const result = updateItem(count)
    setInit(result)
}, [count])

    return (<>
   
            {increase && <button onClick={increase}>{`+${DELTA}`}</button>}
            {decrease && <button onClick={decrease}>{`-${DELTA}`}</button>}
             </>
    );
}
