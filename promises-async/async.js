const {readFile,writeFile}= require('fs').promises


// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//          if(err){
//             console.log(err)
//          }
//          else{
//             resolve(data)
//          }
//         }
            
//         )
//     })
// }

const start = async()=>{
 
    try {
        const firstfile= await readFile('../content/first.txt','utf-8')
        console.log(firstfile)
    } catch (error) {
        console.log(error)
    }
}

start()