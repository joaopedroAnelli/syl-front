import jwt from 'jsonwebtoken';

export function validateWebToken(token: string): Promise<boolean> {
  return new Promise((resolve) => {
    jwt.verify(token, process.env.APP_KEY, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
