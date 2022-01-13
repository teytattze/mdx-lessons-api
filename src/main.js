import app from './app.js';

const PORT = process.env.SERVER_PORT || 3000;

const bootstrap = async () => {
  app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}...`);
  });
};

(async () => bootstrap())();
