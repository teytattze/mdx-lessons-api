import { ObjectID } from 'bson';
import { getDB } from '../infrastructures/databases.js';
import { renameResultID } from '../infrastructures/transforms.js';

const LESSONS_COLLECTION = 'lessons';

export const findLessons = async () => {
  try {
    const collection = getDB().collection(LESSONS_COLLECTION);
    const cursor = await collection.find();
    const result = await cursor.toArray();
    await cursor.close();

    return renameResultID(result);
  } catch (err) {
    console.log(err);
  }
};

export const updateLesson = async (id, data) => {
  try {
    const collection = getDB().collection(LESSONS_COLLECTION);
    const result = await collection.updateOne(
      { _id: new ObjectID(id) },
      { $set: data },
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};
