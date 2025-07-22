
export const useLocalStorage = (key: string, initValue: number | null) => {



const readItem = () => {
 try {
            const stringValue = localStorage.getItem(key) ?? String(initValue)
            return parseInt(stringValue)
        } catch (error) {
            console.error(error)
        }
}

const updateItem = (value: number) => {
     if (initValue === null) return;
        localStorage.setItem(key, String(value))
}
       return {readItem, updateItem}

}


