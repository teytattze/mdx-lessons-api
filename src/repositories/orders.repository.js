import { getDB } from '../infrastructures/databases.js';

const ORDERS_COLLECTION = 'orders';

export const findOrders = async () => {
  try {
    const collection = getDB().collection(ORDERS_COLLECTION);
    const cursor = await collection.find();
    const result = await cursor.toArray();
    await cursor.close();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (data) => {
  try {
    const collection = getDB().collection(ORDERS_COLLECTION);
    const result = await collection.insertOne(data);
    return result;
  } catch (err) {
    console.log(err);
  }
};
