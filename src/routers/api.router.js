import { Router } from 'express';
import lessonsRouter from './lessons.router.js';

const router = Router();

router.use('/lessons', lessonsRouter);

export default router;
