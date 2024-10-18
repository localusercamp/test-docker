
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'noddde-mysql',
    user: 'root',
    password: 'root',
    database: 'noddde',
});

console.log(await connection.query(
    'SELECT * FROM `todos`'
));
