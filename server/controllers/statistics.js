import db from "../db_connection";

export async function highestSwitchboard(req, res) {
  let query = `
  SELECT s.energy_inetensity as intensity,a.area_name
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
      o.user_id=4 
      and 
      ss.is_active="active"
  LIMIT 1;
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

export async function lowestSwitchboard(req, res) {
  let query = `
  SELECT s.energy_inetensity as intensity,a.area_name
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
      o.user_id=4 
      and
      ss.is_active="active"
  ORDER BY s.energy_inetensity
  LIMIT 1;
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}

export async function getTopFiveSwitchboards(req, res) {
  let query = `
  SELECT s.energy_inetensity as intensity,sw.name as area
FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id 
WHERE
    o.user_id=4 
    and
    ss.is_active="active"
ORDER BY s.energy_inetensity asc
LIMIT 5; ;
    `;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
  
}

  export async function getLastFiveSwitchboards(req, res) {
    let query = `
    SELECT s.energy_inetensity as intensity,sw.name as area
FROM MuniLEIMS.statisticalreport s
INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id 
WHERE
    o.user_id=4 
    and
    ss.is_active="active"
ORDER BY s.energy_inetensity desc
LIMIT 5; ;
    
      `;
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