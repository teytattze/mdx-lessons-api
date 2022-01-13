import * as Repository from '../repositories/orders.repository.js';

export const getOrders = async (req, res) => {
  const orders = await Repository.findOrders();
  res.json(orders);
};

export const createOrder = async (req, res) => {
  const body = req.body();
  const result = await Repository.createOrder(body);
  res.json(result);
};
