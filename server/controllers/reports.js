import db from "../db_connection";

export async function getMunicipalities(req, res) {
  const userId = req.body.userid;
  let query = `SELECT s.energy_inetensity as consumption_average ,a.area_name as city
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
WHERE
    o.user_id=${userId} AND ss.is_active="active"
ORDER BY s.energy_inetensity`;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

export async function getCities(req, res) {
  let query = `
  SELECT o.office_name as city, AVG( s.energy_inetensity) AS consumption_average
  FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users ou
    ON ou.office_id = sw.office_id    
INNER JOIN MuniLEIMS.area a
    ON a.area_id = sw.area_id
INNER JOIN MuniLEIMS.office o
    ON o.office_id = ou.office_id
WHERE
    ss.is_active="active"
group by o.office_id
order by consumption_average asc;`;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}
