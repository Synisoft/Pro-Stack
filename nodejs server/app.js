//ASYNCHRONOUS : 
//it contains Fat Arrow = (()=>{})

// setTimeout (()=>{
//     console.log("Hello!");
// },2000) 


// setTimeout (()=>{
//     console.log("Syed");
// },1000) 


// setTimeout (()=>{
//     console.log("How Are");
// },3000) 


// setTimeout (()=>{
//     console.log("You?");
// },2000)


//OS MODULE
// const os = require ('os')

// console.log(os.type())



// FS MODULE - Server basic
// Synchronous


//READ THE FILE DATA IN ABC.TXT USING SYNCHRONOUS it doesn't contains Fat Arrow
// const fs = require ('fs')

// let filecontenet = fs.readFileSync('abc.txt', 'utf-8')

// console.log(filecontenet)

// fs.writeFileSync('xyz.txt', filecontenet, 'utf-8')
// console.log("data Writen in New File : abc.txt")


// WIRTE DATA INSIDE ABC.TXT USING SYNCHRONOUS it doesn't contains Fat Arrow 
// const fs = require ('fs')

// let filecontenet = fs.writeFileSync('abc.txt', 'abhishek')

// fs.readFileSync('xyz.txt', filecontenet, 'utf-8')
// console.log("data Writen in New File:abc.txt")


//FS Module using fat arrow function to create the file and write data from on file to another.

// const fs = require ('fs')

// fs.readFile('abc.txt', 'utf-8',(err, data)=>{
//     if (err) throw err;
//     console.log(data);

//     fs.writeFile('pro.txt', data, 'utf-8',(err)=>{
//         if (err) throw err
//         console.log("written Succesfully!!");

//     })

// })






























