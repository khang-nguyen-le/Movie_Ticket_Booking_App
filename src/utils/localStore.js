export const saveLocal = (key, data) => {
    const newData = JSON.stringify(data)
    localStorage.setItem(key, newData)
}

export const getLocal = (key) => {
    const value = JSON.parse(localStorage.getItem(key))

    return value
}