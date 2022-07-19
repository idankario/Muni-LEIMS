import db from "../db_connection";

const SwitchboardsCtl = {
  async switchboardsById(req, res) {
    const userId = req.params.id;
    const query = `SELECT s.energy_inetensity AS consumption_average,sw.name AS municipality
    FROM MuniLEIMS.statisticalreport s
      INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
    ON ss.statisticalreport_id = s.statisticalreport_id 
      INNER JOIN MuniLEIMS.switchboard sw
    ON sw.switchboard_id = ss.switchboard_id
      INNER JOIN MuniLEIMS.office_users o
    ON o.office_id = sw.office_id    
      WHERE
        o.user_id=${userId} 
      AND 
        ss.is_active=1
      ORDER BY s.energy_inetensity ;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },

  async highestSwitchboard(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity AS intensity,a.area_name
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
    AND 
        ss.is_active=1   
    Order By s.energy_inetensity desc
    LIMIT 1;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async lowestSwitchboard(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity AS intensity,a.area_name
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
    AND 
      ss.is_active=1  
    ORDER BY s.energy_inetensity
    LIMIT 1;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },

  async top5Switchboards(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity AS intensity,sw.name AS area
    FROM MuniLEIMS.statisticalreport s
    INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
        ON ss.statisticalreport_id = s.statisticalreport_id 
    INNER JOIN MuniLEIMS.switchboard sw
        ON sw.switchboard_id = ss.switchboard_id
    INNER JOIN MuniLEIMS.office_users o
        ON o.office_id = sw.office_id 
    WHERE
        o.user_id=${userId}
    And
        ss.is_active=1
    And
        s.energy_inetensity<321
    ORDER BY s.energy_inetensity 
    LIMIT 5;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async last5Switchboards(req, res) {
    const userId = req.params.id;
    const query = `
    SELECT s.energy_inetensity AS intensity,sw.name AS area
    FROM MuniLEIMS.statisticalreport s
    INNER JOIN MuniLEIMS.switchboard_statisticalreport ss
      ON ss.statisticalreport_id = s.statisticalreport_id 
    INNER JOIN MuniLEIMS.switchboard sw
      ON sw.switchboard_id = ss.switchboard_id
    INNER JOIN MuniLEIMS.office_users o
      ON o.office_id = sw.office_id 
    WHERE
      o.user_id=${userId} 
    And
      ss.is_active=1
    And    
      s.energy_inetensity>320
    ORDER BY s.energy_inetensity desc
    LIMIT 5;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async switchboardsLocation(req, res) {
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
      ou.user_id=${userId} 
    AND 
      ss.is_active=1;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async allSwitchboardsLocation(req, res) {
    const query = `
    SELECT o.office_name AS name,o.lng,o.lat, ROUND(AVG( s.energy_inetensity)) AS energy_inetensity
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
        ss.is_active=1
    Group By o.office_id;`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async updateSwitchboards(req, res) {
    const { userId, lat, lng, switchboard } = req.body;
    const query = `
    UPDATE MuniLEIMS.switchboard s
    INNER JOIN  MuniLEIMS.area a  ON a.area_id = s.area_id
    INNER JOIN  MuniLEIMS.office_users ou  ON s.office_id = ou.office_id
    SET
    name = '${switchboard}',
    lat='${lng}',
    lng='${lat}'
    WHERE name = ${switchboard}  
    And 
      ou.user_id=${userId};`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
  async insertSwitchboards(req, res) {
    const { userId, lat, lng, switchboard } = req.body;
    const query = `
    INSERT INTO MuniLEIMS.area(lat,lng)
    VALUES ('${lat}', '${lng}'); 
    INSERT INTO MuniLEIMS.switchboard
    (office_id,area_id,name)
    SELECT ou.office_id, LAST_INSERT_ID(), '${switchboard}'
    FROM MuniLEIMS.office_users ou
    WHERE ou.user_id=${userId};`;
    try {
      db.query(query, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      res.send("error");
    }
  },
};

export default SwitchboardsCtl;
