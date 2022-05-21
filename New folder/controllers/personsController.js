import db from "../db_connection";
export const personsController = {
  getswitchboards(req, res) {
    const userId = req.body.userid;
    let query = `SELECT s.energy_inetensity as consumption_average,sw.name as municipality
        FROM MuniLEIMS.statisticalreport s
      INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
          ON ss.statisticalreport_id = s.statisticalreport_id 
      INNER JOIN MuniLEIMS.switchboard sw
          ON sw.switchboard_id = ss.switchboard_id
      INNER JOIN MuniLEIMS.office_users o
          ON o.office_id = sw.office_id    
      WHERE
          o.user_id=4 AND ss.is_active="active"
      ORDER BY s.energy_inetensity;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
};
export default personsController;
