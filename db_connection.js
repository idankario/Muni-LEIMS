const mysql=require("mysql");
const consts = require('./constants' );
const { DB_HOST, DB_USER, DB_PORT,DB_PASS } = consts;
const db =mysql.createConnection({
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASS,
    database:""
})
db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("DB AWS connected");
});
module.exports = db;