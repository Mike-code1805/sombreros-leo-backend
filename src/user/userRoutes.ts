import { authTokenValidationAndIsAdmin } from "../auth/middlewares/authTokenValidationAndIsAdmin";
import { Router } from "express";

import { getUsersById } from "./controllers/getUserByIdController";

const userRouter: Router = Router();
       
userRouter
.route('/api/users/:id')
    .get(authTokenValidationAndIsAdmin, getUsersById)
    
    
export default userRouter;