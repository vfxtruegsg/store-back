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
      required: true,
    },
    transmission: {
      type: String,
      required: true,
      enum: ['Automatic', 'Manual'],
      default: 'Manual',
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
