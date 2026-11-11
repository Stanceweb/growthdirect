const jwt = require('jsonwebtoken');

exports.verifyToken = (req , res , next) =>{
    try{
        const authHeader = req.headers.authorization;

        // 1. check token exists
        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.status(401).json({message:"No Token Provided"});
        }

        // 2. Extract Token
        const token =  authHeader.split(' ')[1];

        // 3. verify Token
        const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY);

        // 4. Attach user to request
        req.user = decoded;

        next();
    }catch(error){
        return res.status(401).json({message:"Invalid Token"})
    }
}


exports.isAdmin =  (req , res , next ) =>{
    try{
        if(req.user.role !==  'admin'){
            return res.status(403).json({message:"Access Denied (Admin Access only)"})
        }
        next();
    }catch(error){
        console.error(error)
        return res.status(500).json({message:"server Error"})
    }
}