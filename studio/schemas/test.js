const testDir = './objects/';
const fs=require('fs');
let testArray = []
fs.readdir(testDir, (err, files) => {
	files.forEach(file=>{
	testArray.push(file.split('.')[0])
})
console.log(testArray)
})