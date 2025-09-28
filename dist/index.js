import express, {} from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/models/course/course.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/coures', CourseRoutes);
app.get('/', (req, res) => {
    res.send('Hello Ashik khan');
});
export default app;
//# sourceMappingURL=index.js.map