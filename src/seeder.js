import { lessons } from './data/lessons.js';
import { initDB, getDB } from './infrastructures/databases.js';

await initDB();

const lessonsSeeder = async () => {
  try {
    const collection = getDB().collection('lessons');
    await collection.updateMany(lessons);
    console.log('Successfully seed');
  } catch (err) {
    console.log(err);
  }
};

(async () => lessonsSeeder())().then(() => process.exit(0));
