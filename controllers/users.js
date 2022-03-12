const db = require("../db_connection");

module.exports = {
  async getAllUsers(req, res) {
    console.log("getAllUsers()");
    try {
      const query = "SELECT * FROM MuniLEIMS.users";

      db.query(query, function (err, result) {
        if (err) res.status(404).send(`Query error: ${err.stack}`);
        res.json(result);
      });
    } catch (error) {
      console.error(error);
    }
  },


  // create new user in db
  async createNewUser(req, res) {
    console.log("createNewUser()");

    const user_role = req.body.user_role;
    const email = req.body.email;
    const phone = req.body.phone;
    const pass = req.body.pass;
    const user_name = req.body.user_name;
    const user_status = req.body.user_status;

    try {
      const userQuery = `INSERT INTO MuniLEIMS.users 
            (user_role, email, phone, pass, user_name,user_status)
            VALUES ('${user_role}', '${email}', '${phone}', '${pass}', '${user_name}','${user_status}')`;

      db.query(userQuery, function (err, result) {
        if (err) res.status(404).send(`Query error: ${err.stack}`);
        res.json(result);
      });
    } catch (error) {
      console.error(error);
    }
  },

  
  async checkUser(req, res) {
    console.log("checkUser()");

    const email = req.body.email;
    const pass = req.body.pass;
    try {
      const query = `SELECT * FROM MuniLEIMS.users 
                    WHERE email='${email}' AND pass='${pass}'`;
      db.query(query, function (err, result) {
        if (result.length === 1) res.json({ user: result });
        res.json({ error: "cannot find user!" });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
