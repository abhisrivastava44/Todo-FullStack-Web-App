//external module
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const DB_PATH =
  "mongodb+srv://root:Srivast4103a@statedlearningmongodb.anzikpn.mongodb.net/todoApp?appName=StatedLearningMongoDb";

//local module
import todoItemsRouter from "./routes/todoItemsRouter.js";
import * as errorController from "./controllers/errors.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/todo", todoItemsRouter);

app.use(errorController.pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`server is runnig on address http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to Mongo: ", error);
  });
