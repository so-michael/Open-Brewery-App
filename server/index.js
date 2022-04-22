const express = require('express')
const app = express()
const mysql = require('mysql')

//create connection to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'openbrewery'
})

//test query by printing to console
db.query("SELECT * FROM openbrewery.texasbreweries", (err, res) => {
    return console.log(res)
})

//send to server
app.get('/api/get', (req, res) => {
    //const sqlSELECT = "SELECT * FROM texasbreweries";
    db.query("SELECT * FROM texasbreweries", (err, result)=> {
        res.send(result);
    });
});

app.listen(3002, () => {
    console.log("running on port 3002");
})