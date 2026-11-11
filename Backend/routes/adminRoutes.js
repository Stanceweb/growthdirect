const express = require("express");
const router = express.Router();

const {verifyToken , isAdmin} =  require("../middleware/authMiddleware");
const {getUsers , getUserById , deleteUser, updateUserStatus } =  require("../controllers/userController");
const { getDashboardCounts } = require("../controllers/authController");


// Only Admin can Access
router.get('/dashboard' , verifyToken , isAdmin , (req , res )=>{
    res.json({message:"Welcome to Admin Dashboard"})
})

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get All Users
 *     tags: [Admin]
 *      
 *     security:
 *      - bearerAuth: []
 * 
 *     responses:
 *      200:
 *        description: Users Fetched Successfully
 *        content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 * 
 *                  message:
 *                     type: string
 *                     example: Users Fetched Successfully
 * 
 *                  users:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties: 
 * 
 *                          id:
 *                            type: integer
 *                            example: 1
 * 
 *                          name:
 *                            type: string
 *                            example: Kaushal Vora
 *                          
 *                          email:
 *                            type: string
 *                            example: vorakaushal2004@gmail.com
 * 
 *                          password:
 *                            type: string
 *                            example: $2b$10$4TD2yVqMWLhtA7UgVrTCPu8joRoFoWdyzBAa1xhD53SxihygxVZgi
 * 
 *                          role:
 *                            type: string
 *                            example: admin
 * 
 *                          created_at:
 *                            type: string
 *                            example: 2026-04-06T08:15:27.00Z
 * 
 *                          phone:
 *                            type: string
 *                            example: 1234567890
 * 
 *                          status:
 *                            type: string
 *                            example: active
 * 
 *      401:    
 *        description: Unauthorized
 * 
 *      403:
 *        description: Access Denied

 */
router.get('/users' , verifyToken , isAdmin , getUsers);

/**
 * @swagger
 * /api/admin/user/{id}:
 *   get:
 *     summary: Get User By ID
 *     tags: [Admin]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 6
 *
 *     responses:
 *       200:
 *         description: User Fetched Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 id:
 *                   type: integer
 *                   example: 6
 *
 *                 name:
 *                   type: string
 *                   example: Kaushal Vora
 *
 *                 email:
 *                   type: string
 *                   example: vorakaushal2004@gmail.com
 *
 *                 password:
 *                   type: string
 *                   example: $2b$10$4TD2yVqMWLhtA7UgVrTCPu8joRoFoWdyzBAa1xhD53SxihygxVZgi
 *
 *                 role:
 *                   type: string
 *                   example: admin
 *
 *                 created_at:
 *                   type: string
 *                   example: 2026-04-06T08:15:27.000Z
 *
 *                 phone:
 *                   type: string
 *                   example: 9173739731
 *
 *                 status:
 *                   type: string
 *                   example: active
 *
 *       401:
 *         description: Unauthorized
 *
 *       403:
 *         description: Access Denied
 *
 *       404:
 *         description: User Not Found
 */
router.get('/user/:id' , verifyToken , isAdmin , getUserById);


/**
 * @swagger
 * /api/admin/user/{id}:
 * 
 *   delete:
 *     summary: Delete User
 *     tags: [admin]
 * 
 *     security: 
 *     - bearerAuth: []
 * 
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema: 
 *          type: integer
 *       example: 6
 * 
 * 
 *     responses:
 *         200:
 *            description: User Deleted Successfully
 *            content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      properties: 
 * 
 *                         message: 
 *                            type: string
 *                            example: User Deleted Successfully
 * 
 *         401:
 *            description: Unauthorized
 *          
 *         403:
 *            description: Access Denied
 * 
 *         404:
 *            description: User Not Found       
 */
router.delete('/user/:id' , verifyToken , isAdmin , deleteUser);


/**
 * @swagger
 * /api/admin/user/status/{id}:
 *   put:
 *     summary: Update User Status
 *     tags: [Admin]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 11
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *               status:
 *                 type: string
 *                 example: Inactive
 *
 *     responses:
 *       200:
 *         description: User Status Updated Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 success:
 *                   type: boolean
 *                   example: true
 *
 *                 message:
 *                   type: string
 *                   example: User Status Updated Successfully
 *
 *       401:
 *         description: Unauthorized
 *
 *       403:
 *         description: Access Denied
 *
 *       404:
 *         description: User Not Found
 */
router.put("/user/status/:id",verifyToken , isAdmin , updateUserStatus);


/**
 * @swagger
 * /api/admin/dashboard-count:
 *   get:
 *     summary: Get All Dashboard Counts
 *     tags: [Dashboard]
 * 
 *     security:
 *      - bearerAuth: []
 * 
 *     responses:
 *        200:
 *          description: Dashboard Counts Fetched Successfully
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 * 
 *                  total_users: 
 *                     type: integer
 *                     example: 4
 * 
 *                  total_categories:
 *                      type: integer
 *                      example: 5
 *                  
 *                  total_services:
 *                      type: integer
 *                      example: 13
 * 
 *                  total_blogs:
 *                      type: integer
 *                      example: 3
 * 
 *                  total_team_members:
 *                      type: integer
 *                      example: 1
 *                  
 *                  total_testimonials:
 *                      type: integer
 *                      example: 1
 *              
 *                  total_inquiries:
 *                      type: integer
 *                      example: 1
 * 
 *        401: 
 *         description: Unauthorized
 *      
 *        403:
 *         description: Access Denied
 */
router.get('/dashboard-counts' , verifyToken , isAdmin , getDashboardCounts);

module.exports = router;    