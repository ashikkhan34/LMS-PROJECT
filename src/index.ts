import express from "express";
import cors from "cors";

import { CourseRoutes } from "./app/models/course/course.routes.js";
import { mentorRoute } from "./app/models/mentors/mentor.routes.js";
import { seminarRoute } from "./app/models/seminarEvent/seminar.route.js";
import { studentRouter } from "./app/models/student/student.routes.js";
import { studentReviewRouter } from "./app/models/studentReview/studentReview.route.js";
import { userRoutes } from "./app/models/user/user.routes.js";
import { certificateRouter } from "./app/models/certification/certification.route.js";
import { categoryRoute } from "./app/models/category/categroy.route.js";
import { adminRoute } from "./app/models/admin/admin.routes.js";
import { authRouter } from "./app/models/auth/auth.routes.js";

const app = express();


// ✅ Add this CORS middleware (VERY IMPORTANT)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://lms-project-f.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ✅ CORS must be at the very top
app.use(cors({
  origin: ["https://lms-project-f.vercel.app","http://localhost:4000"], //frontend live link
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello Ashik Khan 🚀 — CORS is working!");
});

// ✅ API routes
app.use("/api/course", CourseRoutes);
app.use("/api/mentor", mentorRoute);
app.use("/api/seminar", seminarRoute);
app.use("/api/student", studentRouter);
app.use("/api/studentReview", studentReviewRouter);
app.use("/api/user", userRoutes);
app.use("/api/certificate", certificateRouter);
app.use("/api/category", categoryRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRouter);

// ✅ Export app for Vercel
export default app;
