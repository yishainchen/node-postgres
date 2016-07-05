var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

var client = new pg.Client(connectionString);
client.connect();
// var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
var query = client.query("INSERT INTO items(id, text, complete) values($1, $2, $3)", ['123444', 'McDonald','YES']);
query.on('end', function() { client.end(); });
	
