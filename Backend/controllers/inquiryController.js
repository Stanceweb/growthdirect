const db = require ('../config/db');

// 1 ADD INQUIRY 
exports.addInquiry = async (req , res ) => {
    try{
        const {name , email , phone , message} =  req.body;

        if(!name ||  !email || !phone){
            res.json({message:"required fields missing"});
        }

        await db.query('CALL sp_add_inquiry(?,?,?,?)',[name , email , phone , message]);

        res.json({message:"✅ Inquiry submitted  succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

// 2. GET ALL INQUIRIES 
exports.getInquiries = async (req , res ) => {
    try{
        const [result] = await db.query('CALL sp_get_inquiries()');
        res.json(result[0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 3. GET INQUIRY BY ID
exports.getInquiriesById = async(req , res ) => {
    try{
        const {id} = req.params ;
        const[result] =  await db.query('CALL  sp_get_inquiries_by_id (?)' , [id])
        res.json(result[0][0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 4. DELETE INQUIRY
exports.deleteInquiry= async(req , res) => {
    try{
        const {id} = req.params;
        await db.query('CALL sp_delete_inquiry(?)' ,[id])
        res.json({message:"✅ inquiry deleted successfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}