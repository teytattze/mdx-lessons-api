import * as Repository from '../repositories/lessons.repository.js';

export const getLessons = async (req, res, next) => {
  try {
    const lessons = await Repository.findLessons();
    res.json(lessons);
  } catch (err) {
    console.log(err);
  }
};

export const getLessonsByKeywords = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const lessons = await Repository.searchLessons(keyword);
    res.json(lessons);
  } catch (err) {
    console.log(err);
  }
};

export const bulkUpdateLessons = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await Repository.bulkUpdateLessons(data);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
