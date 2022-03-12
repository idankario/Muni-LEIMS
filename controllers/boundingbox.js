const db = require("../db_connection");

module.exports = {

    async addboundingBox(req, res) {
        console.log("addboundingBox()");
    
        const pointTopLeft = req.body.point_top_left;
        const pointTopRight = req.body.point_top_right;
        const pointBotoomLeft = req.body.point_botoom_left;
        const pointBottomRight = req.body.point_bottom_right;
        
        try {
          const boundingBoxQuery = `INSERT INTO MuniLEIMS.BoundingBox
                (point_top_left,point_top_right,point_botoom_left,point_bottom_right)
                VALUES ('${pointTopLeft}','${pointTopRight}','${pointBotoomLeft}','${pointBottomRight}')`;
    
          db.query(boundingBoxQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },

 async addboundingBoximage(req, res) {
        console.log("addboundingBoximage()");
    
        const imageId = req.body.image_id;
        const BoundingBoxId = req.body.BoundingBox_id;
        const streetlightId = req.body.streetlight_id;
        const BoundingStatus = req.body.Bounding_status;
        
        try {
          const boundingBoxQuery = `INSERT INTO MuniLEIMS.BoundingBox_image
                (image_id,BoundingBox_id,streetlight_id,Bounding_status)
                VALUES ('${imageId}','${BoundingBoxId}','${streetlightId}','${BoundingStatus}')`;
    
          db.query(boundingBoxQuery, function (err, result) {
            if (err) res.status(404).send(`Query error: ${err.stack}`);
            res.json(result);
          });
        } catch (error) {
          console.error(error);
        }
      },
      





    
};