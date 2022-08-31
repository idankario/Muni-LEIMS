import db from "../db_connection";
import { DataBaseErr, GetSuc } from "../myEvents";

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
        DataBaseErr();
        res.send("err");
      } else {
        GetSuc();
        console.log("fdssaffds");
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
};

export default OfficesCtl;
