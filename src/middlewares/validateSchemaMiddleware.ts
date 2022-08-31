import { NextFunction } from "express";

export function validateSchemaMiddleware(schema) {
  return (req: Request, res: Response, next: NextFunction,) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(422);
    }

    next();
  }
}