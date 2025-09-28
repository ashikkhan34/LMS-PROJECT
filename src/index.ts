import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { CourseRoutes } from './app/models/course/course.routes.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/coures',CourseRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Ashik khan')
})

export default app;