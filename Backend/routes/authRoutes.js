const express =  require("express")
const router = express.Router()

const {registerUser} = require('../controllers/authController')
const {loginUser} =  require('../controllers/authController')




/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register New User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kaushal Vora
 *               email:
 *                 type: string
 *                 example: vorakaushal2004@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456789
 *               phone:
 *                 type: string
 *                 example: 9173739731
 *
 *     responses:
 *       200:
 *         description: User Registered Successfully
 *       400:
 *         description: Bad Request
 */
router.post('/register' , registerUser)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags: [Authentication]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               email:
 *                 type: string
 *                 example: vorakaushal2004@gmail.com
 *
 *               password:
 *                 type: string
 *                 example: Kaushal@2004
 *
 *     responses:
 *       200:
 *         description: Login Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 message:
 *                   type: string
 *                   example: Login Successfully
 *
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *
 *                 user:
 *                   type: object
 *                   properties:
 *
 *                     id:
 *                       type: integer
 *                       example: 6
 *
 *                     name:
 *                       type: string
 *                       example: Kaushal Vora
 *
 *                     email:
 *                       type: string
 *                       example: vorakaushal2004@gmail.com
 *
 *                     role:
 *                       type: string
 *                       example: user
 *
 *       401:
 *         description: Invalid Credentials
 */
router.post('/login' , loginUser)

module.exports = router