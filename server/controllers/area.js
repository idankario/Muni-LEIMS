import db from "../db_connection";
export async function getAreas(req, res) {

 const getAreas = async (req, res)=> {
  const userId = req.params.id;
  let query = `SELECT o.office_name,a.area_name, a.lat, a.lng FROM MuniLEIMS.area a
  INNER JOIN MuniLEIMS.switchboard sw
      ON a.area_id = sw.area_id
  INNER JOIN MuniLEIMS.office_users ou
      ON ou.office_id = sw.office_id    
  INNER JOIN MuniLEIMS.office o
      ON o.office_id = ou.office_id    
  WHERE
      ou.user_id=${userId}`;
  db.query(query, (err, result) => {
    res.send(JSON.stringify(result));
  });
}
};