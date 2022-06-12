import db from "../db_connection";

const MunicipalitiesCtl = {
  async municipalities(req, res) {
    const query = `
    SELECT o.office_name AS municipality, ROUND(AVG( s.energy_inetensity)) AS consumption_average
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
    Group By o.office_id
    Order By consumption_average asc;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
  async highestMunicipality(req, res) {
    const query = `
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
    WHERE ss.is_active="active"
    Group By o.office_id
    Order By energy_inetensity_average desc
    LIMIT 1;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },

  async lowestMunicipality(req, res) {
    const query = `
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
    WHERE ss.is_active="active"
    Group By o.office_id
    Order By energy_inetensity_average 
    LIMIT 1;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },

  async top5Municipalities(req, res) {
    const query = `
    SELECT  ROUND(AVG( s.energy_inetensity)) AS energy_inetensity_average, o.office_name
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
    WHERE ss.is_active="active"
    Group By o.office_id
    Order By energy_inetensity_average
    LIMIT 5;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },

  async last5Municipalities(req, res) {
    const query = `
    SELECT ROUND(AVG( s.energy_inetensity)) AS energy_inetensity_average, o.office_name
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
    WHERE ss.is_active="active"
    Group By o.office_id
    Order By energy_inetensity_average desc
    LIMIT 5;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
};

export default MunicipalitiesCtl;
