const BASE_URL = 'http://localhost:3000/api/orders';

export const createOrder = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/orders/create`, {
      method: 'POST',
      body: data,
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
