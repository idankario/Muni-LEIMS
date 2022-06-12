import db from "../db_connection";

const OfficesCtl = {
  async typeOffice(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT count(o.office_name) AS res
    FROM MuniLEIMS.office o
    INNER JOIN  MuniLEIMS.office_users ou on ou.office_id=o.office_id
    WHERE o.office_name="Ministry of Energy"AND ou.user_id=${userId}
    LIMIT 1;`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },
  async officeById(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT MuniLEIMS.office.lat,MuniLEIMS.office.lng,MuniLEIMS.office.office_name
    FROM MuniLEIMS.office
    INNER JOIN MuniLEIMS.office_users  ON MuniLEIMS.office_users.office_id=MuniLEIMS.office.office_id
    WHERE user_id=${userId}
    LIMIT 1;`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },
};

export default OfficesCtl;
