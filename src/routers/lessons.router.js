import { Router } from 'express';
import * as Handler from '../handlers/lessons.handler.js';

const router = Router();

router.get('/', Handler.getLessons);
router.put('/:id/update', Handler.updateLessons);

export default router;
