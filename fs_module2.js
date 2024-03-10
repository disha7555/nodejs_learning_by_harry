// const fs = require('fs');
// fs.writeFile('file2.txt','hi',()=>{console.log("written")});
// console.log("finished reading");

const s1=fs.writeFileSync('file2.txt',"hello world");
console.log(s1);
console.log("finished reading");