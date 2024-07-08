import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY;

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
