const { Router } = require('express');
const {officesCtl } = require('../controllers/offices');

app.get("/offices/type/:id", officesCtl.typeOffice); //is office
app.get("/offices/:id", officesCtl.officeById); //office By Id