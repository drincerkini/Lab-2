import {
  MONGO_CONECTION_URI,
  MONGO_DB_NAME,
  MONGO_PORT,
  API_PORT,
} from "./config";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";
import newsRouter from './routes/newsRouter';
import applicationRouter from './routes/applicationRouter';
import contactRouter from './routes/contactRouter';

mongoose
  .connect(`${MONGO_CONECTION_URI}:${MONGO_PORT}/${MONGO_DB_NAME}`)
  .then(() => {
    console.log(`connected to mongodb on port ${MONGO_PORT}`);

    const app = express();
    app.use(express.static("./uploads"));

    //body parser library for acepting requests in json format
    app.use(bodyParser.json());

    // multer library for storing images
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./../clientapp/public/uploads");
      },
      filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, file.fieldname + "-" + Date.now() + "." + ext);
      },
    });

    const upload = multer({ storage });

    app.use(
      cors({
        origin: "*",
      })
    );

    // API Routes....

    app.use("/news", upload.single("image"), newsRouter);

    app.use("/application", applicationRouter);

    app.use("/contact", contactRouter);


    app.get("*", (req, res) => {
      res.json({ msg: "Not Found" });
    });

    //server running port
    app.listen(API_PORT, () => {
      console.log(`Server is listening to port ${API_PORT} ....`);
    });
  });
