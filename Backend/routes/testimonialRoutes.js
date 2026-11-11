const express =  require ('express');
const { addTestimonial, getTestimonials, updateTestimonials, deleteTestimonials } = require('../controllers/testimonialController');
const upload = require('../middleware/uploadMiddleware');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add' , upload.single('image') ,verifyToken , isAdmin ,addTestimonial );
router.get('/all-testimonials' , getTestimonials);
router.put('/update/:id' , upload.single('image') , verifyToken , isAdmin , updateTestimonials );
router.delete('/delete/:id' , verifyToken , isAdmin , deleteTestimonials);
module.exports = router;
