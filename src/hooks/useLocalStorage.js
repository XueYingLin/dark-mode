import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storeValue, setStoreValue] = useState(() => {

        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
        
    });

    const setValue = value => {
        setStoreValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storeValue, setValue];

}