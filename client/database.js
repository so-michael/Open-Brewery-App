const {createPool} = require('mysql')

const pool = createPool ({
    host: "localhost",
    user: "root",
    password: "password",

})

pool.query('SELECT * FROM openbrewery.texasbreweries', (err, res)=>{
    return console.log(res.data)
})