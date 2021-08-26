
const useLocalStorage = (key, data) => {
    const save = () => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    const load = () => {
        return JSON.parse(localStorage.getItem(key));
    }

    const clear = () => {
        localStorage.clear();
    }

    return {
        save,
        load,
        clear,
    }
}

export { useLocalStorage }