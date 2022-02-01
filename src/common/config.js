import 'dotenv/config';

const environments = {
  server: {
    host: process.env.HOST,
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
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
