const decodeToken = require('../Tokens/Token');

const verifyCredentials = async (req, res, next)=>{
    const {token} = req.cookies
    if(!token)
        res.status(401).json({code: 1, err: 'No token provided.'})
    else{
        try{
            const decoded = await decodeToken(token)
            if(!decoded.userId)
             throw new Error
        
            return next();
        
        }catch(err){
            res.status(401).json({code: 2, err: 'Invalid tokens.'})
        }
    }
}

module.exports = verifyCredentials