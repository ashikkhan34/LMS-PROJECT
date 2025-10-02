import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { CourseRoutes } from './app/models/course/course.routes.js'
import { mentorRoute } from './app/models/mentors/mentor.routes.js'
import { seminarRoute } from './app/models/seminarEvent/seminar.route.js'
import { studentModel } from './app/models/student/student.model.js'
import { studentRouter } from './app/models/student/student.routes.js'
import { studentReviewRouter } from './app/models/studentReview/studentReview.route.js'
import { userModel } from './app/models/user/user.model.js'
import { userRoutes } from './app/models/user/user.routes.js'
import { certificateRouter } from './app/models/certification/certification.route.js'
import { categoryRoute } from './app/models/category/categroy.route.js'
import { adminRoute } from './app/models/admin/admin.routes.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/course',CourseRoutes)
app.use('/api/mentor',mentorRoute)
app.use('/api/seminar',seminarRoute)
app.use('/api/student',studentRouter)
app.use('/api/studentReview',studentReviewRouter)
app.use('/api/user',userRoutes)
app.use('/api/certificate',certificateRouter)
app.use('/api/category',categoryRoute)
app.use('/api/admin',adminRoute)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Ashik khan')
})

export default app;