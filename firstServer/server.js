const http = require("http")
const {readFileSync}=require('fs')

const about = readFileSync('../content/Index.html')

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>hello  this is my first server</h1>')
        res.end()
       
    }
    else if(url=="/about"){
      res.writeHead(200,{'content-type':'text/html'})
      res.write(about)
      res.end()
     
    }
    else{
        res.end("page not found")
       
    }

    
})

server.listen(5000)