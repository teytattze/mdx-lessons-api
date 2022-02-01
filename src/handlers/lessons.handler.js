import * as Repository from '../repositories/lessons.repository.js';

export const getLessons = async (req, res, next) => {
  const lessons = await Repository.findLessons();
  res.json(lessons);
};

export const bulkUpdateLessons = async (req, res, next) => {
  const { data } = req.body;
  const result = await Repository.bulkUpdateLessons(data);
  res.json(result);
};
