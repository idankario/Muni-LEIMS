import express from "express";
import bodyParser from "body-parser";

// import multer from "multer";
// import bodyParser from "body-parser";
import cors from "cors";
import SwitchboardsRouter from "./routers/switchboardsRouter";
import OfficesRouter from "./routers/officesRouter";
import MunicipalitiesRouter from "./routers/municipalitiesRouter";
import ImagesRouter from "./routers/imagesRouter";
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.set("port", port);
app.use("/switchboards", SwitchboardsRouter);
app.use("/offices", OfficesRouter);
app.use("/municipalities", MunicipalitiesRouter);
app.use("/images", ImagesRouter);
app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
