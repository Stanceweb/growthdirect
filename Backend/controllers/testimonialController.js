const db = require ('../config/db')

// 1. ADD TESTIMONIALS 
exports.addTestimonial = async (req , res ) => {
    try{
        const {name , feedback , rating} = req.body;
        const image = req.file ? req.file.filename : null;

          if (!name || !feedback) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        await db.query('CALL sp_add_testimonials(?,?,?,?)' , [name , feedback , rating , image]);

        res.json({message:"✅ Testimonial added successfully..."})
    }catch(error){ 
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}

// 2. GET TESTIMONIALS 
exports.getTestimonials = async (req , res ) => {
    try{
        const [result] = await db.query('CALL sp_get_testimonials()')
        res.json(result[0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 3. UPDATE TESTIMONIALS
exports.updateTestimonials =  async (req , res ) => {
    try{
        const {id} = req.params;
        const {name , feedback , rating} = req.body;
        const image = req.file ? req.file.filename : null;

        await db.query('CALL sp_update_testimonial(?,?,?,?,?)' , [id , name , feedback , rating , image]);

        res.json({message:"✅ testimonial updated successfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 4. DELETE TESTIMONIALS
exports.deleteTestimonials = async (req , res ) => {
    try{
         const {id} = req.params;
          await db.query('CALL sp_delete_testimonial(?)' , [id])

            res.json({message:"✅ testimonial deleted successfully..."});
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}