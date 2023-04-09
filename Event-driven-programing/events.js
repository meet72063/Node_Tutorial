const eventEmmiter = require('events')

const customEmmiter = new eventEmmiter();

customEmmiter.on('response',()=>{
    console.log("this is the Response to the 'response' event ")
})

customEmmiter.emit('response')


