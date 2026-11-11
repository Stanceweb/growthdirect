
const db  =  require('../config/db');

// 1. ADD TEAM MEMBERS
exports.addTeamMembers = async(req , res ) => {
    try{
        const {name , designation , facebook , instagram , twitter , linkedin} = req.body;
        const image =  req.file ? req.file.filename : null ;
        
        if(!name || !designation) {
            res.json({message:"required fields missing"});
        }
        
        await db.query('CALL sp_add_team_member(?,?,?,?,?,?,?)' , [name , designation , image , facebook , instagram , twitter , linkedin]);
        
        res.json({message:"✅ Team Member added succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 2. GET TEAM MEMBERS
exports.getTeamMembers  = async (req , res ) => {
    try{
        const [result] =  await db.query('CALL sp_get_team_member()')
        res.json(result[0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

//  3. GET TEAM MEMBER BY ID
exports.getTeamMemberById =  async (req , res ) => {
    try{
        const {id} = req.params;

        const [result] =  await db.query('CALL sp_get_team_member_by_id(?)' , [id]);

        res.json(result[0][0]);
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 4. UPDATE TEAM MEMBERS
exports.updateTeamMembers =  async (req , res ) => {
    try{
        const {id} =  req.params;
        const {name , designation} =  req.body ;
        const image = req.file ? req.file.filename : null;

        await db.query('CALL sp_update_team_member(?,?,?,?)' , [id , name , designation ,image ]);

        res.json({message:"✅ Team Member Updated successfully..."})

    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

// 5. DELETE TEAM MEMBER
exports.deleteTeamMember = async (req ,res ) => {
    try{
        const {id} = req.params;
         await db.query('CALL sp_delete_team_member(?)', [id])

         res.json({message:"✅Team Member deleted successfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}