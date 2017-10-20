// use fetch or axios to make requests

// import axios from 'axios';

export default {

    get: (url, params, callback) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            callback(null, data);
            //TODO: implement .catch() for error handling
        });
    },

    post: (url, body, callback) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data) => {
            callback(null, data);
            //TODO: implement error catch
        })
    },

    put: (url, body, callback) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((json) => {
            callback(null, json);
            //TODO: implement error catch
        })
    },

    delete: (url, params, callback) => {
        fetch(url, {
            method: 'DELETE',
            params: params
        })
        .then(res => res.json())
        .then(json => {
            callback(null, json);
            //TODO: implement error catch
        });
    }
}