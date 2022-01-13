export const logger = (req, _, next) => {
  const path = req.url;
  const method = req.method;

  const resetColor = '\x1b[0m';
  const textGreen = '\x1b[32m';

  console.log(`${textGreen}[${method}]: ${path}${resetColor}`);

  next();
};
