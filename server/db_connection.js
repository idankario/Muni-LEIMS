import mysql from "mysql";
import { DB_HOST, DB_USER, DB_PORT, DB_PASS } from "./constants";

const db = mysql.createConnection({
<<<<<<< HEAD
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: "MuniLEIMS",
  acquireTimeout: 1000000,
  connectTimeout: 0,
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("DB AWS connected");
});

export default db;
=======
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASS,
    database:"MuniLEIMS",
    acquireTimeout: 1000000,
    connectTimeout: 0
})

db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("DB AWS connected");
});

export default db
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
