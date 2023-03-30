const http= require("http");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to our home page")
    }
   if(req.url==="/about") {
    res.end("this is the about history page ")}
   if(req.url==="/Newpage"){
    res.end("this is the new page")
   }
     
  
  res.end(`<h1>oops!</h1> 
  <p>we can't seem to have the page you are looking for </p>
  <a href="/">Back Home</a>`)
})

server.listen(5000)