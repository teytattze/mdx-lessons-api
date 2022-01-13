import { Router } from 'express';
import { getLessons } from '../handlers/lessons.handler.js';

const router = Router();

router.get('/', getLessons);

export default router;
