import * as Repository from '../repositories/lessons.repository.js';

export const getLessons = async (req, res, next) => {
  const lessons = await Repository.findLessons();
  res.json(lessons);
};

export const updateLessons = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  const result = await Repository.updateLesson(id, body);

  res.json(result);
};
