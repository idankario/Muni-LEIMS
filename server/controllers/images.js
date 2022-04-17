import db from '../db_connection'


export async function uplaodImage(req, res) {
  console.log("uplaodImage()");

  const userId = req.body.user_id;
  const switchboardId = req.body.switchboard_id;
  const scale = req.body.scale;



  try {
    const areaQuery = `INSERT INTO MuniLEIMS.image
                (user_id,switchboard_id,scale)
                VALUES ('${userId}','${switchboardId}','${scale}')`;

    db.query(areaQuery, function (err, result) {
      if (err) res.status(404).send(`Query error: ${err.stack}`);
      res.json(result);
    });
  } catch (error) {
    console.error(error);
  }
}