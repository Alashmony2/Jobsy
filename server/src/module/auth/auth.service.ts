import type { NextFunction, Request, Response } from "express";

class AuthService {
  constructor() {}
  register(req: Request, res: Response, next: NextFunction) {
    return res.status(201).json({ message: "User registered successfully", success: true });
  }
}

export default new AuthService();