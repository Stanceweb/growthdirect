const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const {
  addBlogs,
  getBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlogs,
  getBlogsPaginated,
  searchBlogs,
  deleteBlogs,
} = require("../controllers/blogController");

router.post("/add", upload.single("image"), verifyToken, isAdmin, addBlogs);

router.get("/all-blogs", getBlogs);
router.get("/slug/:slug", getBlogBySlug);   
router.get("/paginated", getBlogsPaginated);
router.get("/search", searchBlogs);
router.get("/:id", getBlogById);

router.put(
  "/update/:id",
  upload.single("image"),
  verifyToken,
  isAdmin,
  updateBlogs,
);

router.delete("/delete/:id", verifyToken, isAdmin, deleteBlogs);

module.exports = router;
