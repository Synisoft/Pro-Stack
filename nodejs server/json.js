//TO CREATE JSON FILE AND WRITE THE FOLLOWING OBJECT IN IT.


// // require the built-in 'fs' module for file system operations
// const fs = require ('fs')

// //Define a javaScript Object to be saved as JASON
// const myObj = {

//     name : 'Rahul Gandhi',
//     age : 50,
//     hobbies : ['reading','hiking','Jodo Yatra']
// }

// //Convert the object to a JSON string
// const JsonString = JSON.stringify(myObj);

// //Write the JSON string to a file using the 'fs' module
// fs.writeFile('myFile.json', JsonString, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!')
// })


// // Read the JSON data form a file using the 'fs' module
// fs.readFile('myFile.json', 'utf-8',(err,data)=>{
//     if (err) throw err;
//     const myData = JSON.parse(data);
//     console.log(myData);
// })


// JSON- OBJECT- STRING: JSON.STRINGIFY()
// const fs = require('fs')
// let employees = [{ id : 101, name: "rahul"}, { id: 102, name:"Rahul"}]

// fs.writeFile('emp.json',JSON.stringify(employees), 'utf-8', (err)=>{
//     if (err) throw err
//     console.log("Written succesfully");

// })


// String - object: JSON.parse()
// const fs = require('fs')

// fs.readFile('emp.json', 'utf-8', (err, data)=>{
//     if (err) throw err
//     console.log(JSON.parse(data));

// })














