//Import module(s)
var pg = require('pg');
//Connect to database
var client = new pg.Client({
  user: 'postgres',
  database: 'calendar',
  password: 'kingini123',
  port: 5432,
});
//Connect
client.connect();
//Query
client.query('SELECT * FROM events', function (err,result) {
    for (var i = 0; i < result.rows.length; i++) {
        console.log(result.rows[i].event);
        
    }
    process.exit();
});