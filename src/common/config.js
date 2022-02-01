import 'dotenv/config';

const environments = {
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    hostname: process.env.SERVER_HOSTNAME,
  },
  mongodb: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
  },
  static: {
    imagesBaseUrl: process.env.STATIC_IMAGES_BASE_URL,
  },
};

export const config = {
  get: (value) => {
    const names = value.split('.');
    let result = environments;
    for (const name of names) {
      result = result[name];
    }
    return result;
  },
};
