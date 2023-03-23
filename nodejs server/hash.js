const bcrypt = require('bcryptjs')

let user = {
    "email": "rahulgandhi@gmail.com",
    'cc': '684861686826646245', 
    'password' : "Hello"
}
let salt = bcrypt.genSaltSync(10);

let new_Email = bcrypt.hashSync(user.email, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
let new_Password = bcrypt.hashSync(user.password, salt)


console.log(user);
console.log({email: new_Email, password: new_Password, cc: new_CC});

let flag = bcrypt.compareSync("Hello", new_Password)
flag ? console.log("Login Success") : console.log("Login Failure")
