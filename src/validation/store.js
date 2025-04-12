import Joi from 'joi';

export const postCarSchema = Joi.object({
  brand: Joi.string()
    .required()
    .messages({ 'any.required': 'Brand is required' }),
  model: Joi.string().required(),
  year: Joi.number().required(),
  engine_type: Joi.string()
    .valid('petrol', 'diesel', 'electric', 'hybrid', 'gas')
    .required(),
  engine_power: Joi.number().required(),
  transmission: Joi.string().valid('automatic', 'manual').required(),
  mileage: Joi.number().required(),
  price: Joi.number().required(),
  traffic_accident: Joi.boolean(),
});

export const updateCarSchema = Joi.object({
  brand: Joi.string().messages({ 'any.required': 'Brand is required' }),
  model: Joi.string(),
  year: Joi.number(),
  engine_type: Joi.string().valid(
    'petrol',
    'diesel',
    'electric',
    'hybrid',
    'gas',
  ),
  engine_power: Joi.number(),
  transmission: Joi.string().valid('automatic', 'manual'),
  mileage: Joi.number(),
  price: Joi.number(),
  traffic_accident: Joi.boolean(),
});
