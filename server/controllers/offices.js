import db from "../db_connection";

export async function typeOffice(req, res) {
  const userId = req.params.id;
  const query = `
  select count(o.office_name) as res
    from MuniLEIMS.office o
    inner join MuniLEIMS.office_users ou on ou.office_id=o.office_id
    where o.office_name="Ministry of Energy"
    and ou.user_id=${userId}
  limit 1;`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}


export async function officeById(req, res) {
  const userId = req.params.id;
  console.log(userId);
  let query = `
  select MuniLEIMS.office.lat,MuniLEIMS.office.lng,MuniLEIMS.office.office_name
from MuniLEIMS.office
INNER JOIN MuniLEIMS.office_users  ON MuniLEIMS.office_users.office_id=MuniLEIMS.office.office_id
where user_id=${userId}
limit 1;`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
