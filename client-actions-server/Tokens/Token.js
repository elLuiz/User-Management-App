const jwt = require("jsonwebtoken");
const {promisify} = require('util');

async function decodeToken(token){
    const result =  await promisify(jwt.verify)(token, process.env.SECRET)
    return result
}

module.exports=decodeToken
