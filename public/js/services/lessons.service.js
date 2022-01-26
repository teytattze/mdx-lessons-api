const BASE_URL = 'http://localhost:3000/api/lessons';

export const getLessons = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateLesson = async (id, data) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/update`, {
      method: 'PUT',
      body: data,
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
