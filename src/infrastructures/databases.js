import { MongoClient } from 'mongodb';
import { config } from './config.js';

let conn;
let db;

export const initDB = async () => {
  const user = config.get('mongodb.user');
  const password = config.get('mongodb.password');
  const database = config.get('mongodb.database');

  const mongoUri = `mongodb+srv://${user}:${password}@cluster0.zthed.mongodb.net/${database}`;

  const client = new MongoClient(mongoUri);

  console.log(client);

  conn = await client.connect();
  db = conn.db(database);

  console.log('Connect to mongodb successfully...');
};

export { db };
