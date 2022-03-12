const db = require("../db_connection");

module.exports = {

    async creatArea(req, res) {
        console.log("creatArea()");
    
        const areaName = req.body.area_name;

    
        try {
          const areaQuery = `INSERT INTO MuniLEIMS.area
                (area_name)
                VALUES ('${areaName}')`;
    
          db.query(areaQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },






    
};