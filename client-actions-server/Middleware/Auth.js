const jwt = require("jsonwebtoken");
const {promisify} = require('util');

const verifyCredentials = async (req, res, next)=>{
    const {token} = req.cookies
    if(!token)
        res.status(401).json({code: 1, err: 'No token provided.'})
    else{
        try{
            const decoded = await promisify(jwt.verify)(token, process.env.SECRET)
            console.log(decoded);
            if(!decoded.userId)
             throw new Error
        
            return next();
        
        }catch(err){
            res.status(401).json({code: 2, err: 'Invalid tokens.'})
        }
    }
}

module.exports = verifyCredentials