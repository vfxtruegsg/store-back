import createHttpError from 'http-errors';
import {
  deleteCar,
  getAllCars,
  getCarById,
  postCar,
  updateCar,
} from '../services/store.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllCarsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const cars = await getAllCars({ page, perPage });

  res.status(200).json({
    status: 200,
    message: 'Successfully found list of cars',
    data: cars,
  });
};

export const getCarByIdController = async (req, res) => {
  const { id } = req.params;
  const car = await getCarById(id);

  res.status(200).json({
    status: 200,
    message: 'Successfully found a car',
    data: car,
  });
};

export const postCarController = async (req, res) => {
  const car = await postCar(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a car',
    data: car,
  });
};

export const putCarController = async (req, res, next) => {
  const { id } = req.params;
  const car = await updateCar(id, req.body, { upsert: true });

  if (!car) {
    createHttpError(404, 'Car not found');
    next();
  }
  const status = car.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upserted a car',
    data: car.updatedCarData,
  });
};

export const patchCarController = async (req, res, next) => {
  const { id } = req.params;

  const car = await updateCar(id, req.body);

  if (!car) {
    next(createHttpError(404, 'Car not found'));
    return;
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a car',
    data: car.updatedCarData,
  });
};

export const deleteCarController = async (req, res, next) => {
  const { id } = req.params;

  const car = await deleteCar(id);

  if (!car) {
    next(createHttpError(404, 'Car not found'));
    return;
  }

  res.status(204).send();
};
