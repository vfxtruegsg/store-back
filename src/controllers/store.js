import { getAllCars } from '../services/store.js';

export const getAllCarsController = async (req, res) => {
  const cars = await getAllCars();
  res.status(200).json({
    status: 200,
    message: 'Successfully found',
    data: cars,
  });
};
