import express, { Application, NextFunction, Request, Response } from "express";
import hatRouter from "./hat/hatRoutes";
import authRouter from "./auth/authRoutes";
import userRouter from "./user/userRoutes";
import hatRecicleRouter from "./hatRecicle/hatRecicleRoutes";
import hatDeletedPermanentlyRouter from "./hatDeletedPermanently/hatDeletedPermanentlyRoutes";

import cors from "cors";

const app: Application = express();

app.use(cors())
app.use(express.json());

app.use(userRouter);
app.use(authRouter);
app.use(hatRouter);
app.use(hatRecicleRouter)
app.use(hatDeletedPermanentlyRouter) 


app.use(function (err: any, _req: Request, res: Response, next: NextFunction) {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
