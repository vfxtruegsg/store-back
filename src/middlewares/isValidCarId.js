import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidCarId = (req, res, next) => {
  const { carId } = req.params;
  if (!isValidObjectId(carId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
