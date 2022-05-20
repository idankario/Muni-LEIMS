const { Router } = require('express');
const { areaCtl } = require('../controllers/area');

app.get("/areas", areaCtl.getAreas);
//app.get("/data/switchboards", areaCtl.getAreas);