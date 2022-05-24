import express from "express";
import multer from "multer";
// import bodyParser from "body-parser";
import cors from "cors";
import switchboardsRouter from "./routers/switchboardsRouter";
import officesRouter from "./routers/officesRouter";
import municipalitiesRouter from "./routers/municipalitiesRouter";
import imagesRouter from "./routers/imagesRouter";
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.set("port", port);
app.use("/switchboards", switchboardsRouter);
app.use("/offices", officesRouter);
app.use("/municipalities", municipalitiesRouter);
app.use("/images", imagesRouter);
app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
