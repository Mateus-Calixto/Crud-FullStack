import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "MySQL1412*",
    database: "crud"
})