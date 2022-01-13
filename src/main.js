import app from './app.js';
import { config } from './infrastructures/config.js';

const bootstrap = async () => {
  const port = config.get('server.port');
  app.listen(port, () => {
    console.log(`Listening on localhost:${port}...`);
  });
};

(async () => bootstrap())();
