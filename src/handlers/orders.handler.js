import * as Repository from '../repositories/orders.repository.js';

export const getOrders = async (req, res) => {
  try {
    const orders = await Repository.findOrders();
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (req, res) => {
  try {
    const { data } = req.body;
    const result = await Repository.createOrder(data);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
