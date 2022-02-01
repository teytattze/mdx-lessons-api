import { Router } from 'express';
import * as Handler from '../handlers/lessons.handler.js';

const router = Router();

router.get('/', Handler.getLessons);
router.put('/bulk/update', Handler.bulkUpdateLessons);

export default router;
