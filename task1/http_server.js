const http = require('http')
const server = http.createServer((request, response) => {
        console.log("test")
    }
)

const port = 8181
server.listen(port, () => {
    console.log('INFO: ')
})