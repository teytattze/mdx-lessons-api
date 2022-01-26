const environments = {
  server: {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 3000,
    hostname: process.env.SERVER_HOSTNAME || 'localhost:3000',
  },
  mongodb: {
    user: process.env.MONGODB_USER || 'admin',
    password: process.env.MONGODB_PASSWORD || 'XpOHMVONxI0X0aue',
    database: process.env.MONGODB_DATABASE || 'individual_db',
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
