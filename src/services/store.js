import { StoreCollection } from '../db/models/store.js';

export const getAllCars = async () => {
  const cars = await StoreCollection.find();
  return cars;
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
