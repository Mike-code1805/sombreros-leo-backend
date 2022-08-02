import { Router } from "express";
import {
  createHatDeletedPermanentlyController,
  getAllHatsDeletedPermanentlyController,
} from "./controllers";
import { hatSchema } from "../shared/utils/hatValidator";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";

const hatDeletedPermanentlyRouter: Router = Router();

hatDeletedPermanentlyRouter
  .route("/api/hatDeletedPermanently")
  .post(bodyRequestValidator(hatSchema), createHatDeletedPermanentlyController)
  .get(getAllHatsDeletedPermanentlyController);

export default hatDeletedPermanentlyRouter;
