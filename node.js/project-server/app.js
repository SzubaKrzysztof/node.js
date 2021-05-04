const http = require('http');

const PORT =  8080

const server = http.createServer((req, res) =>{
    if (req.url === '/friends'){
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        id: 1, 
        name: 'sir isaac newton',
    }));
}else if (req.url === '/messages'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>hello isaac</li>');
    res.write('<li>what are you thoughts on astronomy?</li>');
    res.write('<body>');
    res.end();
}
});

server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});