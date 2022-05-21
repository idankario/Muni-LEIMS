import db from "../db_connection";

export async function getmunicipalities(req, res) {
    let query = `
    SELECT o.office_name as municipality, ROUND(AVG( s.energy_inetensity)) AS consumption_average
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

  export async function highestmunicipality(req, res) {
    let query = `
    SELECT o.office_name,round (AVG( s.energy_inetensity)) AS energy_inetensity_average
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
  order by energy_inetensity_average desc
  LIMIT 1;
      `;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  }

  
export async function lowestmunicipality(req, res) {
    let query = `
    SELECT o.office_name, ROUND(AVG( s.energy_inetensity)) AS energy_inetensity_average
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
  order by energy_inetensity_average asc
  LIMIT 1;
      `;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  }

  
  
export async function getTopFivemunicipality(req, res) {
    let query = `
    SELECT o.office_name, ROUND(AVG( s.energy_inetensity)) AS energy_inetensity_average
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
  order by energy_inetensity_average asc
  LIMIT 5;
      `;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  }
  
  
export async function getLastFivemunicipality(req, res) {
    let query = `
    SELECT o.office_name, ROUND(AVG( s.energy_inetensity)) AS energy_inetensity_average
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
  order by energy_inetensity_average desc
  LIMIT 5;
      `;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  }
  
