const BASE_URL = 'https://mdx-lessons.herokuapp.com/api/lessons';

export const getLessons = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const searchLessons = async (keyword) => {
  const controller = new AbortController();
  const { signal } = controller;
  try {
    const res = await fetch(`${BASE_URL}?keyword=${keyword}`, { signal });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const bulkUpdateLessons = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/bulk/update`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
