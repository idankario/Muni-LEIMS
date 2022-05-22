import db from "../db_connection";

const switchboardsCtl = {
  async getSwitchboardById(req, res) {
    const userId = req.params.id;
    const query = `SELECT s.energy_inetensity as consumption_average,sw.name as municipality
    FROM MuniLEIMS.statisticalreport s
      INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
      INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
      INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
      WHERE
        o.user_id=${userId} AND ss.is_active="active"
      ORDER BY s.energy_inetensity ;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },

  async highestSwitchboard(req, res) {
    const userId = req.params.id;
    const query = `
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
        o.user_id=${userId}
        and 
        ss.is_active="active"      
    Order By s.energy_inetensity desc
    LIMIT 1;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
  async lowestSwitchboard(req, res) {
    const userId = req.params.id;
    const query = `
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
      o.user_id=${userId} and ss.is_active="active"
    ORDER BY s.energy_inetensity
    LIMIT 1;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },

  async getTopFiveSwitchboards(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity as intensity,sw.name as area
    FROM MuniLEIMS.statisticalreport s
    INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
        ON ss.statisticalreport_id = s.statisticalreport_id 
    INNER JOIN MuniLEIMS.switchboard sw
        ON sw.switchboard_id = ss.switchboard_id
    INNER JOIN MuniLEIMS.office_users o
        ON o.office_id = sw.office_id 
    WHERE
        o.user_id=${userId} 
        and
        ss.is_active="active"
    ORDER BY s.energy_inetensity 
    LIMIT 5;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
  async getLastFiveSwitchboards(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity as intensity,sw.name as area
    FROM MuniLEIMS.statisticalreport s
    INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
      ON ss.statisticalreport_id = s.statisticalreport_id 
    INNER JOIN MuniLEIMS.switchboard sw
      ON sw.switchboard_id = ss.switchboard_id
    INNER JOIN MuniLEIMS.office_users o
      ON o.office_id = sw.office_id 
    WHERE
      o.user_id=${userId} and ss.is_active="active"
    ORDER BY s.energy_inetensity desc
    LIMIT 5;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
  async getSwLocation(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT sw.name,a.lat, a.lng, s.energy_inetensity FROM MuniLEIMS.area a
    INNER JOIN MuniLEIMS.switchboard sw
        ON a.area_id = sw.area_id
    INNER JOIN MuniLEIMS.office_users ou
        ON ou.office_id = sw.office_id    
    INNER JOIN MuniLEIMS.office o
        ON o.office_id = ou.office_id  
	  INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
        ON ss.statisticalreport_id = sw.switchboard_id    
	  INNER JOIN MuniLEIMS.statisticalreport s
        ON ss.statisticalreport_id = s.statisticalreport_id  
    WHERE
        ou.user_id=${userId} AND ss.is_active='active';`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
  async getAllSwLocation(req, res) {
    const query = `
    SELECT o.office_name as name,o.lng,o.lat, ROUND(AVG( s.energy_inetensity)) AS energy_inetensity
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
    Group By o.office_id;`;
    db.query(query, (err, result) => {
      res.send(JSON.stringify(result));
    });
  },
};

export default switchboardsCtl;