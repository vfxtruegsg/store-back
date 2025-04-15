import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    second_name: {
      type: String,
      required: true,
    },
    tel_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', userSchema);
