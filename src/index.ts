import { createDbConection } from "./config/databaseConfig";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
createDbConection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () =>
  console.log(`Server Started on port ${process.env.PORT}`)
);
