import { getAllCars, getCarById } from '../services/store.js';

export const getAllCarsController = async (req, res) => {
  const cars = await getAllCars();
  res.status(200).json({
    status: 200,
    message: 'Successfully found list of cars',
    data: cars,
  });
};

export const getCarByIdController = async (req, res) => {
  const { carId } = req.params;
  const car = await getCarById(carId);

  res.status(200).json({
    status: 200,
    message: 'Successfully found a car',
    data: car,
  });
};
