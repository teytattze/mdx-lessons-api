import { DateTime } from 'luxon';

export const logger = () => (req, _, next) => {
  const path = req.url;
  const method = req.method;

  const resetColor = '\x1b[0m';
  const textGreen = '\x1b[32m';

  console.log(
    `${textGreen}[${method}] [${DateTime.now().toLocaleString(
      DateTime.TIME_WITH_SECONDS,
    )}]: ${path}${resetColor}`,
  );
  next();
};
