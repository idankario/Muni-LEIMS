import db from "../db_connection";
import {DataBaseErr,GetSuc} from "../myEvents";

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
        ss.is_active=1
    Group By o.office_id
    Order By consumption_average asc;`;
    try {
      db.query(query, (err, result) => {
        if (err) {throw err;}
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
      
    }
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
    WHERE 
      ss.is_active=1
    Group By o.office_id
    Order By energy_inetensity_average desc
    LIMIT 1;`;
    try {
      db.query(query, (err, result) => {
        if (err) {throw err;}
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
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
    WHERE 
      ss.is_active=1 
    Group By o.office_id
    Order By energy_inetensity_average 
    LIMIT 1;`;
    try {
      db.query(query, (err, result) => {
        if (err) {throw err;}
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
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
    WHERE 
      ss.is_active=1
    Group By o.office_id
    Order By energy_inetensity_average
    LIMIT 5;`;
    try {
      db.query(query, (err, result) => {
        if (err) {throw err;}
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
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
    WHERE 
      ss.is_active=1
    Group By o.office_id
    Order By energy_inetensity_average desc
    LIMIT 5;`;
    try {
      db.query(query, (err, result) => {
        if (err) {throw err;}
        GetSuc();
        res.send(JSON.stringify(result));
      });
    } catch (error) {
      DataBaseErr();
      res.send("error");
    }
  },
};

export default MunicipalitiesCtl;
