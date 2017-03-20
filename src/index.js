import 'isomorphic-fetch'

function toBase64(str) {
    return new Buffer(str).toString('base64')
}

const {
    GITHUB_USERNAME: username,
    GITHUB_PASSWORD: password
} = process.env

const headers = {}

if (username) {
    const creds = username + ':' + password
    const Authorization = 'Basic ' + toBase64(creds)
    headers.Authorization = Authorization
}

fetch('https://github.com/AndersDJohnson/firedux/pulls', {
    headers
})
