import db from "../db_connection";
const ImagesCtl = {
  async uplaodImage(req, res) {
    const { userId, scale, x, y, consumption, switchboards, fileName } =
      req.body;
    if (
      !(userId && scale && x && y && consumption && switchboards && fileName)
    ) {
      res.send("error");
    }
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
          if (err) throw err;
          const statisticalreport_id = result.insertId;
          //For each switchboard connect image and statistical report
          switchboards.forEach((switchboardName) => {
            const query3 = `
              INSERT INTO MuniLEIMS.switchboard_statisticalreport
              (switchboard_id,image_id,statisticalreport_id)
              SELECT sw.switchboard_id, '${newImageId}', '${statisticalreport_id}'
              FROM MuniLEIMS.switchboard sw
              INNER JOIN MuniLEIMS.office_users O ON O.office_id=sw.office_id
              WHERE user_id=${userId}
              AND sw.name=${switchboardName};`;
            db.query(query3, (err, result) => {
              if (err) throw err;
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
    if (!fileName) {
      res.send("error");
    }
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
    if (!(width && height && fileName)) {
      res.send("error");
    }
    const query = `
    SELECT image_id  
    FROM MuniLEIMS.image
    WHERE image_name = '${fileName}'`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        const query1 = `
        INSERT INTO MuniLEIMS.BoundingBox
        (x, y,width,height,image_id)
        VALUES ('${x}', '${y}', '${width}', '${height}',${result[0].image_id});`;
      });
    } catch (error) {
      res.send("error");
    }
  },
  //
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
  async getImagesName(req, res) {
    const userId = req.params.id;
    const query = `
    select MuniLEIMS.image.image_name,a.is_active
    from MuniLEIMS.image 
    INNER JOIN MuniLEIMS.switchboard_statisticalreport a 
    ON a.image_id=MuniLEIMS.image.image_id
    WHERE user_id=${userId} 
    And a.is_active >1 
    order by MuniLEIMS.image.upload_date desc;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send(error);
    }
  },
  async activeStatisticalReport(req, res) {
    const userId = req.params.id;
    const query = `
    select MuniLEIMS.image.image_name,a.is_active
    from MuniLEIMS.image 
    INNER JOIN MuniLEIMS.switchboard_statisticalreport a 
    ON a.image_id=MuniLEIMS.image.image_id
    WHERE user_id=${userId} 
    And a.is_active >1 
    order by MuniLEIMS.image.upload_date desc;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send(error);
    }
  },
  async disactiveStatisticalReport(req, res) {
    const userId = req.params.id;
    const query = `
    select MuniLEIMS.image.image_name,a.is_active
    from MuniLEIMS.image 
    INNER JOIN MuniLEIMS.switchboard_statisticalreport a 
    ON a.image_id=MuniLEIMS.image.image_id
    WHERE user_id=${userId} 
    And a.is_active >1 
    order by MuniLEIMS.image.upload_date desc;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send(error);
    }
  },
};

export default ImagesCtl;
