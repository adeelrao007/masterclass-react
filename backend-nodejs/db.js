import mysql from 'mysql2/promise';

let pool;

export function getDB() {
    console.log(process.env);
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

export async function testDBConnection() {
  try {
    const connection = await getDB().getConnection();
    await connection.ping();
    connection.release();
    console.log('Connected to MySQL');
  } catch (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
}
