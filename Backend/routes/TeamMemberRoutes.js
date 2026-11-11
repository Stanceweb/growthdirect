const express = require ('express');
const upload = require('../middleware/uploadMiddleware');
const { addTeamMembers, getTeamMembers, getTeamMemberById, updateTeamMembers, deleteTeamMember } = require('../controllers/TeamMemberController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/add' , upload.single('image'), verifyToken , isAdmin , addTeamMembers);
router.get('/all-team-members' ,  getTeamMembers);
router.get('/:id' ,getTeamMemberById) ;
router.put('/update/:id' , upload.single('image'),  verifyToken , isAdmin , updateTeamMembers) ;
router.delete('/delete/:id' , verifyToken , isAdmin , deleteTeamMember) ;

module.exports = router;
