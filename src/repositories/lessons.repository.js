import { ObjectID } from 'bson';
import { getDB } from '../infrastructures/databases.js';

export const findLessons = async () => {
  try {
    const collection = getDB().collection('lessons');
    const cursor = await collection.find();
    const result = await cursor.toArray();
    await cursor.close();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateLesson = async (id, data) => {
  try {
    const collection = getDB().collection('lessons');
    const result = await collection.updateOne(
      { _id: new ObjectID(id) },
      { $set: data },
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};
