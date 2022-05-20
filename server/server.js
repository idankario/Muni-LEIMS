import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

const { areaCtl } = require('./routers/areaRouter');
const { municipalitiesCtl } = require('./routers/municipalitiesRouter');
const { officesCtl } = require('./routers/officeRouter');
const { switchboardsCtl } = require('./routers/switchboardsRouter');

app.use(bodyParser.json());
app.set("port", port);
app.use(cors());
app.use(express.json());

app.use('/api/areas', areaCtl);
app.use('/api/municipalities', municipalitiesCtl);
app.use('/api/offices', officesCtl);
app.use('/api/swithchboards', switchboardsCtl);

app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
