import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import  areaRouter  from './routers/areaRouter';
import  municipalitiesRouter  from './routers/municipalitiesRouter';
import  officesRouter  from './routers/officeRouter';
import  switchboardsRouter  from './routers/switchboardsRouter';



const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.set("port", port);
app.use(cors());
app.use(express.json());

app.use('/api/areas', areaRouter);
app.use('/api/municipalities', municipalitiesRouter);
app.use('/api/offices', officesRouter);
app.use('/api/swithchboards', switchboardsRouter);

app.all("*", (req, res) => {
  res.send("Wrong route, please try again.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
