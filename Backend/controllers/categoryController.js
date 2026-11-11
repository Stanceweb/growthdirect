
const db = require('../config/db')

// 1. ADD CATEGORY
exports.addCategory = async (req , res ) => {
    try{

        const {name , type } = req.body;
        await db.query('CALL sp_add_category(?,?)', [name , type]);
        
        res.json({message:"✅Category added Succesfully.."})
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"})
    }
}

// 2. GET CATEGORY
exports.getCategories = async(req , res ) => {
    try{
        const [result] =  await db.query("CALL sp_get_categories()");
        res.json(result[0]);
    }catch(error){
        console.error(error)
        res.status(500).json({message:'Server Error'})
    }
}

// 3. UPDATE CATEGORIES 
exports.updateCategory =  async(req , res ) => {
    try{
        const {id} =  req.params;
        const {name , type} = req.body;
        await db.query("CALL sp_update_category(?,?,?)" , [id , name , type ]);

        res.json({message:"✅ category updated succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json("server error")
    }
}

// 4. DELETE CATEGORY 
exports.deleteCategory = async(req , res ) => {
    try{

        const {id} =  req.params;
        
        await db.query('CALL sp_delete_category(?)' , [id])
        
        res.json({message:'✅ category deleted successfully...'})
    }catch(error){
        console.error(error)
        res.status(500).json("server error")
    }
}