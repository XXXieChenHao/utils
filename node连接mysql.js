var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'test'
})

connection.connect()

connection.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error
    console.log(results)
})