import { FIFTEEN_MIN, THIRTY_DAYS } from '../constants/index.js';
import { randomBytes } from 'crypto';

export const createSession = () => {
  const refreshToken = randomBytes(30).toString('base64');
  const accessToken = randomBytes(30).toString('base64');

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MIN),
    refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
  };
};
