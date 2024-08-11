const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request,respose) => {
    if(request.url == '/')
    {
        respose.statusCode = 200
        respose.setHeader = ('Content-Type', 'plain/text');
        respose.end("Hey ice tea")
    } else if (request.url == '/ice-tea')
    {
        respose.statusCode = 200
        respose.setHeader = ('Content-Type', 'plain/text');
        respose.end("Ice tea served")
    }
    else 
    {
        respose.statusCode = 404
        respose.setHeader = ('Content-Type', 'plain/text');
        respose.end("404 page not found")
    }
})

server.listen(port, hostname, ()=> {
    console.log(`Application listening on http://${hostname}:${port}`)
})