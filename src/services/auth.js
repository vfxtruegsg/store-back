import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { UsersCollection } from '../db/models/auth.js';
import { SessionsCollection } from '../db/models/session.js';
import { FIFTEEN_MIN, THIRTY_DAYS } from '../constants/index.js';
import { createSession } from '../utils/createSession.js';

export const registerUser = async (payload) => {
  const isExistUser = await UsersCollection.findOne({
    email: payload.email,
  });

  if (isExistUser)
    throw createHttpError(409, 'A user with this email is already registered');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (!user) throw createHttpError(404, 'User not found');

  const isEqual = await bcrypt.compare(payload.password, user.password);

  if (!isEqual) throw createHttpError(401, 'Unauthorized');

  await SessionsCollection.deleteOne({ userId: user._id });

  const newSession = createSession();

  return await SessionsCollection.create({
    userId: user._id,
    ...newSession,
  });
};

export const logoutUser = async (sessionId) => {
  await SessionsCollection.findByIdAndDelete(sessionId);
};

export const refreshUserSession = async ({ sessionId, refreshToken }) => {
  const session = await SessionsCollection.findOne({
    _id: sessionId,
    refreshToken,
  });

  if (!session) throw createHttpError(404, 'Session not found');

  const isRefreshTokenExpired =
    new Date() > new Date(session.refreshTokenValidUntil);

  if (isRefreshTokenExpired)
    throw createHttpError(401, 'Session token expired');

  await SessionsCollection.deleteOne({ _id: sessionId, refreshToken });

  const newSession = createSession();

  return await SessionsCollection.create({
    userId: session.userId,
    ...newSession,
  });
};
