// import { Pool } from 'pg';
// import dotenv from '../dotenv';

// dotenv.config();

// // ==> Connection with the database.
// const connectDb = async () => {
//   try {
//     const pool = new Pool({
//       // user: process.env.PGUSER,
//       // host: process.env.PGHOST,
//       // database: process.env.PGDATABASE,
//       // password: process.env.PGPASSWORD,
//       // port: process.env.PGPORT,
//       user: 'vfvidvrv',
//       host: 'mouse.db.elephantsql.com',
//       password: 'CKUCCvf2P-nJsFy7AKV-MMpI-kIWpoSR',
//       database: 'vfvidvrv',
//       port: '5431',
//     });

//     await pool.connect()
//     const res = await pool.query('SELECT * FROM users')
//     console.log(res)
//     await pool.end()
//   } catch (error) {
//     console.log(error)
//   }
// }
// connectDb();