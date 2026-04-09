const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
app.use(cors()); // разрешаем CORS

const client = new Client({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'testdb',
  port: 5432,
});

const startServer = async () => {
  try {
    await client.connect(); // подключаемся к базе
    console.log('✅ Connected to DB');

    app.get('/data', async (req, res) => {
      try {
        const result = await client.query('SELECT * FROM public.gemeinde');
        res.json(result.rows);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

    app.listen(3000, () => {
      console.log('🚀 Server started on port 3000');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();