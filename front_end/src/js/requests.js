// send post request to backend
function sendPostRequest(url, data, callback) {
    console.log(JSON.stringify(data))
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// export functions
export {sendPostRequest};