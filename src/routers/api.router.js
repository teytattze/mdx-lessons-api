import { Router } from 'express';
import lessonsRouter from './lessons.router.js';
import ordersRouter from './orders.router.js';

const router = Router();

router.use('/lessons', lessonsRouter);
router.use('/orders', ordersRouter);

export default router;
