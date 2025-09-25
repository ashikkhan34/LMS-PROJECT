import express, { type Request, type Response } from 'express'
import { CourseRoutes } from './app/models/course/course.routes.js'
const app = express()

app.use('api/coures',CourseRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Ashik khan')
})

export default app;