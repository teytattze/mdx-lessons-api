const BASE_URL = 'http://localhost:3000/api/orders';

export const createOrder = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/create`, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
