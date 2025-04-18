import { Schema, model } from 'mongoose';

const storeSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    engine_type: {
      type: String,
      enum: ['petrol', 'diesel', 'electric', 'hybrid', 'gas'],
      required: true,
    },
    engine_power: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
      enum: ['automatic', 'manual'],
      default: 'manual',
    },
    mileage: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    traffic_accident: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const StoreCollection = model('store_cars', storeSchema);
