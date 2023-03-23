const dotenv = require('dotenv')
dotenv.config({ path: 'config.env'})

//to read data from env file.
let DEV_URL = process.env.LOCAL_URL
console.log(DEV_URL);
