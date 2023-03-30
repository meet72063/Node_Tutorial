//it gives method about file path

const path=require('path')

console.log(path.sep)

//creating the normalize path
const filepath=path.join("/Modules","name","call")
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

//creating absolute path
const absolute=path.resolve(__dirname,"name","call","test.txt")
console.log(absolute)


