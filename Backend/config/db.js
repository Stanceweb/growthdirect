const mysql = require("mysql2/promise")
require("dotenv").config();

// Create Connection Pool

const db = mysql.createPool({
host:process.env.DB_HOST,
user:process.env.DB_USER,
database:process.env.DB_NAME,
password:process.env.DB_PASSWORD,
})

db.getConnection((err , connection)=>{
    if(err){
        console.error("❌ DataBase Connection Failed" , err.message)
    }else{
        console.log("✅ DataBase Connection Succesfully....")
        connection.release();
    }
})

module.exports = db;