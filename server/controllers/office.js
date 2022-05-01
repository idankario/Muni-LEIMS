import db from "../db_connection";

export async function creatOffice(req, res) {
  console.log("creatoffice()");

  const officenName = req.body.office_name;
  const officeLocation = req.body.office_location;
  const phone = req.body.phone;
  const email = req.body.email;

  try {
    const userQuery = `INSERT INTO MuniLEIMS.office 
                (office_name, office_location, phone,email)
                VALUES ('${officenName}', '${officeLocation}', '${phone}', '${email}')`;

    db.query(userQuery, function (err, result) {
      if (err) res.status(404).send(`Query error: ${err.stack}`);
      res.json(result);
    });
  } catch (error) {
    console.error(error);
  }
}

export async function createNewUser(req, res) {
  console.log("creatOffice()");

  const officeId = req.body.office_id;
  const userId = req.body.user_id;

  try {
    const userQuery = `INSERT INTO MuniLEIMS.office_user 
                (office_id, user_id)
                VALUES ('${officeId}', '${userId}')`;

    db.query(userQuery, function (err, result) {
      if (err) res.status(404).send(`Query error: ${err.stack}`);
      res.json(result);
    });
  } catch (error) {
    console.error(error);
  }
}
