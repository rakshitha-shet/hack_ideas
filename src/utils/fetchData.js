
const API_URL = "https://movie-e85ec-default-rtdb.firebaseio.com/ideas.json"

export const postData = (data) => {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
