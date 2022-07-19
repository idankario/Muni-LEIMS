import db from "../db_connection";
// import sw from "./switchboards"
const ImagesCtl = {
  async uplaodImage(req, res) {
    const { userId, scale, x, y, consumption, switchboards, fileName } =
      req.body;
    const query = `INSERT INTO MuniLEIMS.image
      (user_id, scale, x, y,image_name)
      VALUES ('${userId}', '${scale}', '${x}', '${y}','${fileName}');`;
    try {
      db.query(query, function (err, result) {
        if (err) throw err;
        const newImageId = result.insertId;
        const query2 = `
        INSERT INTO MuniLEIMS.statisticalreport(consumption)
        VALUES
        ('${consumption}');`;
        db.query(query2, function (err, result) {
          const statisticalreport_id = result.insertId;
          switchboards.forEach((switchboardName) => {
            const query3 = `
              SELECT sw.switchboard_id
              FROM MuniLEIMS.switchboard sw
              INNER JOIN MuniLEIMS.office_users O ON O.office_id=sw.office_id
              WHERE user_id=${userId}
              AND sw.name=${switchboardName}`;
            db.query(query3, (err, result) => {
              if (err) throw err;
              const query4 = `
              INSERT INTO MuniLEIMS.switchboard_statisticalreport
              (image_id,
              switchboard_id,
              statisticalreport_id)
              VALUES
              ('${newImageId}','${result[0].switchboard_id}',
              '${statisticalreport_id}');`;
              db.query(query4, (err, result) => {
                if (err) throw err;
              });
            });
          });
          res.send(result);
        });
      });
    } catch (error) {
      res.send("error");
    }
  },
  async insertEnergyIntensity(req, res) {
    const { streetlightAmount, fileName } = req.body;
    const sl = streetlightAmount == 0 ? 1 : streetlightAmount;
    const query = `
    UPDATE MuniLEIMS.switchboard_statisticalreport ss  
    INNER JOIN MuniLEIMS.image i ON i.image_id  = ss.image_id
    INNER JOIN  MuniLEIMS.statisticalreport  ON MuniLEIMS.statisticalreport.statisticalreport_id  = ss.statisticalreport_id
    SET 
    ss.is_active=2,
    MuniLEIMS.statisticalreport.energy_inetensity=MuniLEIMS.statisticalreport.consumption/${sl}>>0,
    MuniLEIMS.statisticalreport.amount_streetlight=${streetlightAmount}
    WHERE image_name = '${fileName}';`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      res.send("error");
    }
  },
  async insertBoundingBox(req, res) {
    const { x, y, width, height, fileName } = req.body;
    const query = `SELECT image_id  FROM MuniLEIMS.image
    WHERE image_name = '${fileName}'`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        const query1 = `INSERT INTO MuniLEIMS.BoundingBox
        (x, y,width,height)
        VALUES ('${x}', '${y}', '${width}', '${height}');`;

        db.query(query1, (err, result1) => {
          if (err) throw err;
          const query2 = `INSERT INTO MuniLEIMS.BoundingBox_image
          (image_id,BoundingBox_id)
          VALUES('${result[0].image_id}','${result1.insertId}');`;

          db.query(query2, (err, result) => {
            if (err) throw err;
            res.send(result);
          });
        });
      });
    } catch (error) {
      res.send("error");
    }
  },
  async getImages(req, res) {
    const query = `
    SELECT * FROM MuniLEIMS.image
    WHERE status=2;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      res.send("error");
    }
  },
};

export default ImagesCtl;
