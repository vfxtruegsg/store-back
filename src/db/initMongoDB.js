import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoDB = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const collection = getEnvVar('MONGODB_COLLECTION');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${collection}?retryWrites=true&w=majority`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};
