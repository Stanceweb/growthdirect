const db = require('../config/db');

// 1. Get users
exports.getUsers = async(req , res ) => {
    try{
        const[result] =  await db.query('CALL sp_get_users()');
        const users = result[0];

        res.json(users);
    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}


// 2.Get user By id
exports.getUserById  =  async(req , res ) => {
    try{
        const {id} =  req.params;

        const[result] =  await db.query('CALL sp_get_user_by_id(?)', [id]);
        const user =  result[0][0];

        if(!user){
            return res.status(404).json({message:"user not found !"})
        }

        res.json(user)
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"})
    }
}


//4. update user
exports.updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await db.query("CALL sp_update_user_status(?, ?)", [id, status]);

    res.status(200).json({
      success: true,
      message: "User status updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error updating user status",
    });
  }
};


// 3 . Delete user
exports.deleteUser = async(req , res ) => {
    try{
        const {id} = req.params;
        await db.query('CALL sp_delete_user(?)' , [id]);

        res.json({message:"user deleted succesfully..."})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"server error !"})
    }
}