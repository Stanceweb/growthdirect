const express = require("express");
const router = express.Router();

const {addCategory, getCategories, updateCategory, deleteCategory} =  require('../controllers/categoryController');
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.post('/add' ,verifyToken , isAdmin , addCategory);
router.get('/all-categories' , getCategories);
router.put('/update/:id' , verifyToken , isAdmin , updateCategory);
router.delete('/delete/:id' , verifyToken , isAdmin , deleteCategory);
module.exports = router;
