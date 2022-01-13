import { Router } from 'express';
import { getOrders } from '../handlers/orders.handler.js';

const router = Router();

router.get('/', getOrders);

export default router;
