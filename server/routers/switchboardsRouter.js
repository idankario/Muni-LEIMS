const { Router } = require('express');
const { switchboardsCtl } = require('../controllers/switchboards');

app.get("/swithchboards/:id", switchboardsCtl.getSwitchboards);
app.get("/swithchboards/high", switchboardsCtl.highestSwitchboard);
//app.get("/statistics/high_Switchboard", switchboardsCtl.highestSwitchboard);
app.get("/swithchboards/lowest", switchboardsCtl.lowestSwitchboard);
//app.get("/statistics/lowest_switchboard", switchboardsCtl.lowestSwitchboard);
app.get("/swithchboards/top",switchboardsCtl.getTopFiveSwitchboards);
//app.get("/statistics/top_five_switchboards",switchboardsCtl.getTopFiveSwitchboards);
app.get("/swithchboards/top",switchboardsCtl.getLastFiveSwitchboards);
//app.get("/statistics/top_last_switchboards",switchboardsCtl.getLastFiveSwitchboards);