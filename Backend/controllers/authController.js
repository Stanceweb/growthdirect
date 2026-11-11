const db  =  require('../config/db')
const bcrypt =  require("bcrypt")
const jwt = require('jsonwebtoken')

exports.registerUser =  async(req , res ) =>{
    try{
        const {name , email , password , phone} =  req.body;

        //1. check user Exist
        const [result] =  await db.query('CALL sp_login_user(?)' , [email]);
        const user =  result[0][0];

       if(user){
        return res.status(400).json({message:"Email already registered "})
       }
       // 2. hashed Password
       const hashedPassword  =  await bcrypt.hash(password , 10 );

      // 3. Insert user
      await db.query('CALL sp_register_user(?,?,?,?)', [name , email , hashedPassword , phone]);
      res.json({message:"user registered Succesfully.."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

exports.loginUser =  async (req , res ) =>{
    try{
        const {email , password} =  req.body
        
        //1.  get user
        const [result] = await db.query('CALL sp_login_user(?)',[email]);
        const user = result[0][0]  

        if(!user){
            return res.status(404).json({message:'User not found'})
        }

        // 2. compare Password
        const isMatch =  await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid Password"})
       }

       // 3. generate Token
       const token = jwt.sign(
        {id:user.id , role:user.role},
        process.env.JWT_SECRET_KEY, 
        {expiresIn : '1d'}
       ) ;
       
    //    4. Response
    res.json({message:'Login Succesfull' , 
             token , 
             user:{
                id:user.id,
                name:user.name,
                email:user.email,
                role:user.role 
             }
})
       
    }catch(error){
        console.error(error)
        res.status(500).json ({message:"server error"})
    }
}
 

//  GET DASHBOARD 
exports.getDashboardCounts = async (req, res) => {
  try {
    const [result] = await db.query("CALL sp_dashboard_counts()");
    res.json(result[0][0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};