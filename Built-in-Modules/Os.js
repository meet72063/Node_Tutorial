const os = require('os')

//info about current user
const  user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

//os info
const currentOs={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freemem:os.freemem()

}
console.log(currentOs)
