import db from "../db_connection";

export async function getAllUsers(req, res) {
  console.log("getAllUsers()");
  try {
    const query = "SELECT * FROM MuniLEIMS.office_users;";

    db.query(query, function (err, result) {
      if (err) res.status(404).send(`Query error: ${err.stack}`);
      res.json(result);
    });
  } catch (error) {
    console.error(error);
  }
}
