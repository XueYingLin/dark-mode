import { useLocalStorage } from "./useLocalStorage";

export consts useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
}