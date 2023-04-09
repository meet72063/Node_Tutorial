const {readFile,writeFile}= require('fs')


const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
         if(err){
            console.log(err)
         }
         else{
            resolve(data)
         }
        }
            
        )
    })
}

getText('../content/first.txt').then((text)=>{console.log(text)}).catch(()=>{
    console.log('there is an error occured');
})

