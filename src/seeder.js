import { lessons } from './data/lessons.js';
import { initDB, getDB } from './common/databases.js';

await initDB();

const lessonsSeeder = async () => {
  try {
    const collection = getDB().collection('lessons');
    await collection.insertMany(lessons);
    collection.createIndex({ subject: 'text', location: 'text' });
    console.log('Successfully seed');
  } catch (err) {
    console.log(err);
  }
};

(async () => lessonsSeeder())().then(() => process.exit(0));
