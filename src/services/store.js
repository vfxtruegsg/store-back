import { StoreCollection } from '../db/models/store.js';

export const getAllCars = async () => {
  const cars = await StoreCollection.find();
  return cars;
};

export const getCarById = async (carId) => {
  const car = await StoreCollection.findById(carId);
  return car;
};
