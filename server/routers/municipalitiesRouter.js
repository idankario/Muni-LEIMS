const { Router } = require('express');
const { municipalitiesCtl } = require('../controllers/municipalities');

app.get("municipalities", municipalitiesCtl.getmunicipalities);
//app.get("/data/municipalities", municipalitiesCtl.getmunicipalities);
app.get("/municipalities/high", municipalitiesCtl.highestmunicipality);
//app.get("/statistics/high_municipality", municipalitiesCtl.highestmunicipality);
app.get("/municipalities/lowest", municipalitiesCtl.lowestmunicipality);
//app.get("/statistics/lowest_municipality", municipalitiesCtl.lowestmunicipality);
app.get("/municipalities/top",municipalitiesCtl.getTopFivemunicipality);
//app.get("/statistics/top_five_municipality",municipalitiesCtl.getTopFivemunicipality);
app.get("/municipalities/last",municipalitiesCtl.getLastFivemunicipality);
//app.get("/statistics/last_five_municipality",municipalitiesCtl.getTopFivemunicipality);