import { authTokenValidation } from "../auth/middlewares/authTokenValidation";
import { Router } from "express";
import {
  createHatController,
  deleteOneHatController,
  getAllHatsController,
  getOneHatByIdController,
  updateHatController,
} from "./controllers";
import { hatSchema } from "../shared/utils/hatValidator";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";

const hatRouter: Router = Router();

hatRouter
  .route("/api/hat")
  .post(bodyRequestValidator(hatSchema), createHatController)
  .get(getAllHatsController);

hatRouter
  .route("/api/hat/:id")
  .get(authTokenValidation, getOneHatByIdController)
  .delete(deleteOneHatController)
  .put(authTokenValidation, updateHatController);

export default hatRouter;
