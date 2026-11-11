const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const blogRoutes = require("./routes/blogRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const TeammemberRoutes = require("./routes/TeamMemberRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec,{
    swaggerOptions: {
        persistAuthorization: true,
    }
}));

// 👇 ADD THIS
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("✅ Api is Running...");
});

// AUTHENTICATION ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// SERVICE ROUTES
app.use("/api/service", serviceRoutes);

// CATEGORY ROUTES
app.use("/api/category", categoryRoutes);

// BLOG ROUTES
app.use("/api/blogs", blogRoutes);

// INQUIRY ROUTES
app.use("/api/inquiry", inquiryRoutes);

// TEAM MEMBER ROUTES
app.use("/api/team-member", TeammemberRoutes);

// TESTIMONIALS ROUTES
app.use("/api/testimonial", testimonialRoutes);
module.exports = app;
