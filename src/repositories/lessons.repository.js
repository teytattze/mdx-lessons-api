import { ObjectId } from 'bson';
import { getDB } from '../common/databases.js';
import { renameResultID } from '../lib/transforms.js';

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

export const searchLessons = async (keyword) => {
  try {
    const collection = getDB().collection(LESSONS_COLLECTION);
    const cursor = await collection.find({
      $text: { $search: keyword },
    });
    const result = await cursor.toArray();
    await cursor.close();

    return renameResultID(result);
  } catch (err) {
    console.log(err);
  }
};

export const bulkUpdateLessons = async (data) => {
  try {
    const collection = getDB().collection(LESSONS_COLLECTION);
    const lessons = data.map((lesson) => ({
      updateOne: {
        filter: { _id: new ObjectId(lesson.id) },
        update: { $set: { slot: lesson.slot } },
      },
    }));
    return await collection.bulkWrite(lessons);
  } catch (err) {
    console.log(err);
  }
};
