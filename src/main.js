import app from './app.js';
import { config } from './common/config.js';
import { initDB } from './common/databases.js';

const bootstrap = async () => {
  await initDB();
  const port = config.get('server.port') || 3000;
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}...`);
  });
};

(async () => bootstrap())();
