import { StoreCollection } from '../db/models/store.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { filtrationCarsRequest } from '../utils/filtrationCarsRequest.js';

export const getAllCars = async (pagination) => {
  const {
    page = 1,
    perPage = 10,
    sortOrder = 'asc',
    sortBy = '_id',
    filter = {},
  } = pagination;

  const limit = perPage;
  const skip = (page - 1) * perPage;

  const carsQuery = StoreCollection.find();

  filtrationCarsRequest(carsQuery, filter);

  const carsCount = await StoreCollection.find()
    .merge(carsQuery)
    .countDocuments();

  const cars = await carsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();
  const paginationData = calculatePaginationData(carsCount, perPage, page);

  return { data: cars, ...paginationData };
};

export const getCarById = async (carId) => {
  const car = await StoreCollection.findById(carId);
  return car;
};

export const postCar = async (payload) => {
  const car = await StoreCollection.create(payload);
  return car;
};

export const updateCar = async (carId, payload, options = {}) => {
  const updatedCar = await StoreCollection.findOneAndUpdate(
    { _id: carId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  return {
    updatedCarData: updatedCar.value,
    isNew: Boolean(updatedCar?.lastErrorObject?.upserted),
  };
};

export const deleteCar = async (id) => {
  const car = await StoreCollection.findByIdAndDelete(id);
  return car;
};
