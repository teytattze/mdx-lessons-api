import { Router } from 'express';
import * as Handler from '../handlers/orders.handler.js';

const router = Router();

router.get('/', Handler.getOrders);
router.post('/create', Handler.createOrder);

export default router;
