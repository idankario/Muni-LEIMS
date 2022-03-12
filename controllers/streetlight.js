const db = require("../db_connection");

module.exports = {

    async addStreetLightType(req, res) {
        console.log("addStreetLightType()");
    
        const nameClass = req.body.name_class;
        const consumption = req.body.consumption;
        const density = req.body.density;


    
        try {
          const areaQuery = `INSERT INTO MuniLEIMS.streetlight_type
                (name_class,consumption,density)
                VALUES ('${userId}','${switchboardId}','${scale}')`;
    
          db.query(areaQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },
};