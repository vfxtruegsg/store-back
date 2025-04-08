import { getAllCars, getCarById, postCar } from '../services/store.js';

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

export const postCarController = async (req, res) => {
  const car = await postCar(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a car',
    data: car,
  });
};
