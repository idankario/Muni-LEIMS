import db from "../db_connection";
// import sw from "./switchboards"
const ImagesCtl = {
  async uplaodImage(req, res) {
    const { userId, scale, lat, lng, consumption, switchboards, fileName } =
      req.body;
    try {
      const query = `INSERT INTO MuniLEIMS.image
      (user_id, scale, lat, lng,consumption,image_name)
      VALUES ('${userId}', '${scale}', '${lat}', '${lng}','${consumption}','${fileName}');`;
      db.query(query, function (err, result) {
        if (err) throw err;
        const newImageId = result.insertId;
        switchboards.forEach((switchboardName) => {
          // const id= await sw.getSwitchboardId(req,res,userId,switchboardName);
          const query2 = `
              SELECT sw.switchboard_id
              FROM MuniLEIMS.switchboard sw
              INNER JOIN MuniLEIMS.office_users O ON O.office_id=sw.office_id
              WHERE user_id=${userId}
              AND sw.name=${switchboardName}`;
          db.query(query2, (err, result) => {
            if (err) throw err;
            const query3 = `INSERT INTO switchboards_image
              (image_id, switchboard_id)
              VALUES ('${newImageId}', '${result[0].switchboard_id}');`;
            db.query(query3, (err, result) => {
              if (err) throw err;
            });
          });
        });
        res.send(result);
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default ImagesCtl;
