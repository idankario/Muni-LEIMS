const express = require('express');
const cors = require('cors');
const usersCtl = require('./controllers/users.js');
const switchboardsCtl = require('./controllers/swithchboards.js');
const imagesCtl = require('./controllers/images.js');
const officesCtl = require('./controllers/office.js');
const areaCtl = require('./controllers/area.js');
const boxesCtl = require('./controllers/boundingbox.js');
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*** User routes ***/
app.get('/users/getAllUsers', usersCtl.getAllUsers);//get all users in the system 
app.post('/users/createNewUser', usersCtl.createNewUser);//creat new user in the system without office 
app.post('/users/checkUser', usersCtl.checkUser);//check user for login (email&pass)

/*** Swithchboard routes ***/
app.post('/swithchboards/creatNewSwitchboard',switchboardsCtl.creatNewSwitchboard);//add switchboard to the data without connected to area
app.put('/swithchboards/updateswitchboard',switchboardsCtl.updateswitchboard);//update the switchboard data 
app.post('/swithchboards/addSwitchboardArea',switchboardsCtl.addSwitchboardArea);//connect switchboard to the area
app.post('/swithchboards/addSwitchboardImage',switchboardsCtl.addSwitchboardImage);//connect switchboard to the image

/*** Office routes ***/
app.post('/offices/creatOffice', officesCtl.creatOffice);//creat office 
app.post('/offices/createNewUser', officesCtl.createNewUser);//creat new user in the office 

/*** Area routes ***/
app.post('/areas/creatArea', areaCtl.creatArea);//creat new area 

/*** Image routes ***/
app.post('/images/uplaodImage', imagesCtl.uplaodImage);//uplad new image without saving it

/*** BoundingBoxes routes ***/
app.post('/addboundingBoxes/addboundingBox', boxesCtl.addboundingBox);//add new BoundingBoxes 
app.post('/addboundingBoxes/addboundingBox', boxesCtl.addboundingBoximage);//add new BoundingBoxes 

app.all('*', (req, res) => { res.send("Wrong route, please try again.") });

app.listen(port, () => console.log(`Listening on port ${port}`));