import { type Express } from "express";
import authRouter from "./module/auth/auth.controller";
export function bootstrap(app: Express, express: any) {
  //auth 
  app.use("/auth", authRouter);
  app.use("/{*dummy}", (req, res, next) => {
    return res.status(404).json({ message: "Invalid router", success: false });
  });
}
