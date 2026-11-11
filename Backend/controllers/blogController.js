
const { response } = require('../app');
const db = require('../config/db');
const slugify = require ('slugify')

//  1.ADD BLOGS
exports.addBlogs =  async (req , res ) => {
    try{

        const {title , content , author_id , category_id } = req.body
        const slug = slugify(title, {lower: true, strict: true,});
        const image = req.file ? req.file.filename : null;
        
        await db.query('CALL sp_add_blog(?,?,?,?,?,?)' , [title , slug , content , image , author_id , category_id]);
        
        res.json({message:"✅ Blog added successfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}


// 2. GET BLOGS
exports.getBlogs =  async( req , res ) => {
    try{
        const [result] =  await db.query('CALL sp_get_blogs()');
        res.json(result[0])
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"})
    }
}


// 3. GET BLOGS BY ID
exports.getBlogById = async (req ,res) => {
    try{
        const {id} = req.params;

        const result = await db.query('CALL sp_get_blog_by_id(?)' , [id]);

        res.json(result[0][0]);
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error "})
    }
}


// 4.UPDATE BLOGS 
exports.updateBlogs = async(req , res ) => {
    try{
        const {id} =  req.params;
        const {title , content  , category_id} = req.body;
        const slug = slugify(title, {lower: true, strict: true,});
        const image = req.file ? req.file.filename : null;

        await db.query('CALL sp_update_blog (?,?,?,?,?,?)' , [id , title , slug , content , image  , category_id]);

        res.json({message:"✅ Blogs updated succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 5. GET BLOG BY SLUG
exports.getBlogBySlug =  async (req , res ) => {
    try{
        const {slug} =  req.params;
        const [result] =  await db.query('CALL sp_get_blog_by_slug(?)' , [slug])

        res.json(result[0][0])

    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 6. PAGINATED BLOGS
exports.getBlogsPaginated =  async(req , res ) => {
    try{
        const {page , limit } = req.query;
        
        const [result] = await db.query('CALL sp_get_blogs_paginated(?,?)' , [page , limit])
        
        res.json(result[0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 7. SEARCH BLOG
exports.searchBlogs =  async (req , res ) => {
    try{
        const {keyword} = req.query; 
        
        const [result] =  await db.query('CALL sp_search_blogs(?)' , [keyword]);

        res.json(result[0])
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}


// 8. DELETE BLOGS 
exports.deleteBlogs = async(req , res ) => {
    try{
      const {id} =  req.params;

      await db.query('CALL sp_delete_blog(?)' , [id])

      res.json({message:"✅ Blog Deleted Succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}