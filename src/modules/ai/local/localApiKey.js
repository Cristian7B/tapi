export function saveApi(apiKey) {
    window.localStorage.setItem("apiKey", apiKey)
}

export function saveTimePrev(timePrev) {
    window.localStorage.setItem("timePrev", timePrev)
    console.log(timePrev)
}