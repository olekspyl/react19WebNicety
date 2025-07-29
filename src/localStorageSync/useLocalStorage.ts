
export const useLocalStorage = (key: string, initValue: number | null) => {
const readItem = () => {
    if(!initValue) return;
    const data = localStorage.getItem(key)
    return parseInt(data)
}

const updateItem = (value: number | null) => {
    const data = localStorage.setItem(key, value)
    return String(data)
}

return {readItem, updateItem}

}


