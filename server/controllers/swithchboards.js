const db = require("../db_connection");

module.exports = {
    async creatNewSwitchboard(req, res) {
        console.log("creatNewSwitchboard()");

        const officeId = req.body.office_id;
        const coordinates = req.body.coordinates;
    
        try {
          const switchboardQuery = `INSERT INTO MuniLEIMS.switchboard 
                (office_id, coordinates)
                VALUES ( '${officeId}', '${coordinates}')`;
    
          db.query(switchboardQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },
      

      async updateswitchboard(req, res) {
        console.log("updateswitchboard()");

        const officeId = req.body.office_id;
        const coordinates = req.body.coordinates;
    
        try {
          const switchboardQuery = `UPDATE MuniLEIMS.switchboard  WHERE
          office_id = '${officeId}' AND
          coordinates = '${coordinates}'
          `;
    
          db.query(switchboardQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },

      async addSwitchboardArea(req, res) {
        console.log("addSwitchboardArea()");

        const switchboardId = req.body.switchboard_id;
        const areaId = req.body.area_id;
  
        try {
          const switchboardQuery = `INSERT INTO MuniLEIMS.switchboard_area 
                (switchboard_id, area_id)
                VALUES ( '${switchboardId}', '${areaId}')`;
    
          db.query(switchboardQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },

      async addSwitchboardImage(req, res) {
        console.log("addSwitchboardImage()");

        const imageId = req.body.image_id;
        const switchboardId = req.body.switchboard_id;
  
        try {
          const switchboardQuery = `INSERT INTO MuniLEIMS.switchboards_image
                (image_id, switchboard_id)
                VALUES ( '${imageId}', '${switchboardId}')`;
    
          db.query(switchboardQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },
    







    
};