import db from "../db_connection";
import {
  DataBaseErr,
  ImgaeFormErr,
  ImgaeFormSuc,
  InsertSuc,
  GetSuc,
  FileName,
  InsertFormBounding,
} from "../myEvents";

const ImagesCtl = {
  async uplaodImage(req, res) {
    const { userId, scale, x, y, consumption, switchboards, fileName } =
      req.body;
    if (
      !(userId && scale && x && y && consumption && switchboards && fileName)
    ) {
      ImgaeFormErr();
      res.send("error");
    }
    const query = `INSERT INTO MuniLEIMS.image
      (user_id, scale, x, y,image_name)
      VALUES ('${userId}', '${scale}', '${x}', '${y}','${fileName}');`;
    try {
      db.query(query, function (err, result) {
        if (err) {
          DataBaseErr();
          throw err;
        }
        const newImageId = result.insertId;
        const query2 = `
        INSERT INTO MuniLEIMS.statisticalreport(consumption)
        VALUES
        ('${consumption}');`;
        db.query(query2, function (err, result) {
          if (err) {
            throw err;
          }
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
              if (err) {
                DataBaseErr();
                throw err;
              }
            });
          });
          ImgaeFormSuc();
          res.send(result);
        });
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
  },
  async insertEnergyIntensity(req, res) {
    const { streetlightAmount, fileName } = req.body;
    if (!fileName) {
      FileName();
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
        if (err) {
          throw err;
        }
        InsertSuc();
        res.send(result);
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
  },
  async insertBoundingBox(req, res) {
    const { x, y, width, height, fileName } = req.body;
    if (!(width && height && fileName)) {
      InsertFormBounding();
      res.send("error");
    }
    const query = `
    INSERT INTO MuniLEIMS.BoundingBox
    (image_id,x, y,width,height)
    SELECT i.image_id,'${x}', '${y}', '${width}', '${height}'
    FROM MuniLEIMS.image i 
    WHERE image_name = '${fileName}'`;
    try {
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }
        const query1 = `
        INSERT INTO MuniLEIMS.BoundingBox
        (x, y,width,height,image_id)
        VALUES ('${x}', '${y}', '${width}', '${height}',${result[0].image_id});`;
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
  },

  async getImages(req, res) {
    const query = `
    SELECT * FROM MuniLEIMS.image
    WHERE status=2;`;
    try {
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }
        GetSuc();
        res.send(result);
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
  },
  async getImagesName(req, res) {
    const userId = req.params.id;
    const query = `
    Select MuniLEIMS.image.image_name,a.is_active
    From MuniLEIMS.image 
    INNER JOIN MuniLEIMS.switchboard_statisticalreport a 
    ON a.image_id=MuniLEIMS.image.image_id
    WHERE user_id=${userId} 
    And a.is_active >1 
    And YEAR(upload_date) = YEAR(CURRENT_DATE )
    AND MONTH(upload_date) = MONTH(CURRENT_DATE)
    Order By MuniLEIMS.image.upload_date desc;`;
    try {
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send(error);
    }
  },
  async activeStatisticalReport(req, res) {
    const { imageName, distance } = req.body;
    const query = `
    Update MuniLEIMS.switchboard_statisticalreport ss
    INNER JOIN MuniLEIMS.switchboard_statisticalreport s_s 
    ON s_s.switchboard_id=ss.switchboard_id
    INNER JOIN MuniLEIMS.image i ON i.image_id=ss.image_id
    SET s_s.is_active = 0 
    WHERE s_s.is_active=1 
    AND i.image_name='${imageName}'; 
    Update MuniLEIMS.switchboard_statisticalreport ss
    INNER JOIN MuniLEIMS.image i ON i.image_id=ss.image_id
    SET ss.is_active = 1
    WHERE 
    ss.is_active=2 
    AND
    i.image_name='${imageName}';
    Update MuniLEIMS.statisticalreport s 
    INNER JOIN MuniLEIMS.switchboard_statisticalreport ss ON s.statisticalreport_id = ss.statisticalreport_id
    INNER JOIN MuniLEIMS.image i ON i.image_id=ss.image_id
    SET s.average_density_streetlight = '${distance}'
    Where i.image_name='${imageName}';`;
    console.log(query);
    try {
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send(error);
    }
  },
  async disactiveStatisticalReport(req, res) {
    const { imageName } = req.body;
    const query = `
    Update MuniLEIMS.switchboard_statisticalreport ss
    INNER JOIN MuniLEIMS.image i ON i.image_id=ss.image_id
    SET ss.is_active = 0
    WHERE 
    ss.is_active=2 
    AND
    i.image_name='${imageName}';`;
    try {
      db.query(query, (err, result) => {
        if (err) {
          throw err;
        }
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send(error);
    }
  },
};

export default ImagesCtl;
