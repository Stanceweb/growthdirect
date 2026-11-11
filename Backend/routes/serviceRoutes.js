const express = require('express')
const router = express.Router();
const {addService, getServices, getServiceById, updateService, deleteService} =  require('../controllers/serviceController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const upload = require ('../middleware/uploadMiddleware')

router.post(
  '/add',
  upload.single('image'),
  (req, res, next) => {
    req.body = { ...req.body }; // 🔥 FIX
    next();
  },
  verifyToken,
  isAdmin,
  addService
);
router.get('/all-services' , getServices);
router.get('/:id' , getServiceById);
router.put('/update/:id', upload.single('image'),  verifyToken , isAdmin , updateService );
router.delete('/delete/:id' , verifyToken , isAdmin , deleteService);

module.exports = router;