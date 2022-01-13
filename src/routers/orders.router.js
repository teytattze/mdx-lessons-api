import { Router } from 'express';
import * as Handler from '../handlers/orders.handler.js';

const router = Router();

router.get('/', Handler.getOrders);

export default router;
