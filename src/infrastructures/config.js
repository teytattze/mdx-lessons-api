const environments = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  mongodb: {
    user: 'admin',
    password: 'XpOHMVONxI0X0aue',
    database: 'groupwork_db',
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
