import { type Express } from "express";
export function bootstrap(app: Express, express: any) {
  app.use("/{*dummy}", (req, res, next) => {
    return res.status(404).json({ message: "Invalid router", success: false });
  });
}
