
const API_URL = "https://movie-e85ec-default-rtdb.firebaseio.com/"

export const postData = (data) => {
    return fetch(`${API_URL}ideas.json`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const patchData = (id, data) => {
    return fetch(`${API_URL}ideas/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getData = () =>{
    return fetch(`${API_URL}ideas.json`);
}