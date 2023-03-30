//async is non blocking the code that take time will execute later 
//its not like sync in which code executed line by line which will take time 

const {readFile,writeFile}=require("fs")
console.log('start')

readFile('../content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('../content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    const second = result;
    writeFile('../content/result-async',`this is the result of asyncronus read :${first+" "+second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    })
    })
})
console.log("ready for next task")