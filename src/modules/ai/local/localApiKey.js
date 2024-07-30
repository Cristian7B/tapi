export function saveApi(apiKey) {
    console.log(apiKey)
    window.localStorage.setItem("apiKey", apiKey)
}