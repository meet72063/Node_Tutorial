//file 
//in syc the code executed line by line and take time
const {readFileSync,writeFileSync}=require('fs')
console.log('start');
//to read any file
const first = readFileSync('../content/first.txt','utf8')
console.log(first)
const second = readFileSync('../content/second.txt','utf8')
console.log(second);
 
//to write (create) file 
writeFileSync('../content/writeFile.txt',`Here is the result:${first+" "+second } ` ,{flag:'a'})
console.log('done with this task');
console.log('ready for next task');