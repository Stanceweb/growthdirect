const express = require('express');
const { addInquiry, getInquiries, getInquiriesById, deleteInquiry } = require('../controllers/inquiryController');
const { verify } = require('jsonwebtoken');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add' , addInquiry);
router.get('/all-inquiries' , verifyToken , isAdmin ,getInquiries );
router.get('/:id' , verifyToken , isAdmin , getInquiriesById);
router.delete('/delete/:id' , verifyToken , isAdmin , deleteInquiry); 

module.exports = router