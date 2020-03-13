import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedvalue, setStoreValue] = useState(() => {
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
    })

    const setValue = value => {
        setStoreValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedvalue, setValue]
}