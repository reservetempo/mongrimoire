const Pool = require('pg').Pool;
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    user: process.env.VITE_PSQL_USER,
    password: process.env.VITE_PSQL_PASSWORD,
    host: process.env.VITE_PSQL_HOST,
    port: process.env.VITE_PSQL_PORT,
    database: process.env.VITE_PSQL_DB
}); 

module.exports = pool;