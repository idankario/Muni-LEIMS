import db from "../db_connection";

const OfficesCtl = {
  async typeOffice(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT count(o.office_name) AS res
    FROM MuniLEIMS.office o
    INNER JOIN  MuniLEIMS.office_users ou on ou.office_id=o.office_id
    WHERE 
      o.office_name="Ministry of Energy"
    AND 
      ou.user_id=${userId}
    LIMIT 1;`;
    db.query(query, (err, result) => {
      if (err) {
        res.send("err");
      } else {
        res.send(result);
      }
    });
  },
  async officeById(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT a.lat,a.lng,o.office_name
    FROM MuniLEIMS.office o
    INNER JOIN MuniLEIMS.area a
    ON a.area_id = o.area_id
    INNER JOIN MuniLEIMS.office_users  ON MuniLEIMS.office_users.office_id=o.office_id
    WHERE user_id=${userId}
    LIMIT 1;`;
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

export default OfficesCtl;
