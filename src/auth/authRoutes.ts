import { Router } from "express";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";
import { signUpUserSchema, singInUserSchema } from "./middlewares/authRequestValidation";

import { authLogin } from "./controllers/authLoginController";
import { authSignup } from "./controllers/authSignupController";

const authRouter: Router = Router();

authRouter
    .route('/api/auth/login')
    .post(bodyRequestValidator(singInUserSchema), authLogin)

authRouter
  .route("/api/auth/register")
  .post(bodyRequestValidator(signUpUserSchema), authSignup);

export default authRouter;
