import Joi from 'joi';

export const registerUserSchema = Joi.object({
  first_name: Joi.string().max(30).required(),
  second_name: Joi.string().max(30).required(),
  tel_number: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
