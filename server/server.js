import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import cors from "cors";
import * as usersCtl from "./controllers/users";
import * as switchboardsCtl from "./controllers/swithchboards";
import * as imageUploadCtl from "./controllers/imageUpload";
import * as imagesCtl from "./controllers/images";
import * as reportsCtl from "./controllers/reports";
import * as officesCtl from "./controllers/office";
import * as areaCtl from "./controllers/area";
import * as boxesCtl from "./controllers/boundingbox";
import * as statisticsCtl from "./controllers/statistics";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", port);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*** User routes ***/
app.get("/users/getAllUsers", usersCtl.getAllUsers); //get all users in the system from office users

/*** Swithchboard routes ***/
app.get("/swithchboards/:id", switchboardsCtl.getSwitchboards);

/*** Swithchboard routes ***/
app.post(
  "/swithchboards/creatNewSwitchboard",
  switchboardsCtl.creatNewSwitchboard
); //add switchboard to the data without connected to area
app.put("/swithchboards/updateswitchboard", switchboardsCtl.updateswitchboard); //update the switchboard data
app.post(
  "/swithchboards/addSwitchboardArea",
  switchboardsCtl.addSwitchboardArea
); //connect switchboard to the area
app.post(
  "/swithchboards/addSwitchboardImage",
  switchboardsCtl.addSwitchboardImage
); //connect switchboard to the image

/*** Office routes ***/
app.post("/offices/creatOffice", officesCtl.creatOffice); //creat office
app.post("/offices/createNewUser", officesCtl.createNewUser); //creat new user in the office
app.get("/offices/isOffice", officesCtl.isOffice); //is office
/*** Area routes ***/
app.post("/areas/creatArea", areaCtl.creatArea); //creat new area

/*** Image routes ***/
app.post("/images/uplaodImage", imagesCtl.uplaodImage); //uplad new image without saving it

/*** BoundingBoxes routes ***/
app.post("/addboundingBoxes/addboundingBox", boxesCtl.addboundingBox); //add new BoundingBoxes
app.post("/addboundingBoxes/addboundingBox", boxesCtl.addboundingBoximage); //add new BoundingBoxes

/*** image upload routes ***/

app.post(
  "/imgupload/upload",
  multer().single("file"),
  imageUploadCtl.uploadImage
); //get all users in the system : ;

/*** statistics ***/
app.get("/statistics/high_Switchboard", statisticsCtl.highestSwitchboard);
app.get("/statistics/lowest_switchboard", statisticsCtl.lowestSwitchboard);
app.get(
  "/statistics/top_five_switchboards",
  statisticsCtl.getTopFiveSwitchboards
);
app.get(
  "/statistics/top_last_switchboards",
  statisticsCtl.getLastFiveSwitchboards
);
app.get("/statistics/high_Muncipalty", statisticsCtl.highestMuncipalty);
app.get("/statistics/lowest_Muncipalty", statisticsCtl.lowestMuncipalty);
app.get("/statistics/top_five_Muncipalty", statisticsCtl.getTopFiveMuncipalty);
app.get(
  "/statistics/last_five_Muncipalty",
  statisticsCtl.getLastFiveMuncipalty
);

/*** db data routes ***/
app.get("/data/municipalities", reportsCtl.getMunicipalities);
app.get("/data/cities", reportsCtl.getCities);

app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
