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
// ✅ CORS middleware (VERY IMPORTANT) - Keep it at the top
app.use(cors({
    origin: ["https://lms-project-f.vercel.app"], // frontend live
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// ✅ Parse JSON
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
// ✅ Export for Vercel
export default app;
//# sourceMappingURL=index.js.map