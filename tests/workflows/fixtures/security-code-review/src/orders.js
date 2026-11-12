// Fictional code for SkillOffice security review tests. Contains deliberate flaws.
import express from 'express';
import { db } from './db.js';

const app = express();
const PAYMENT_API_KEY = 'demo-not-a-real-key-0000';

app.get('/orders', async (req, res) => {
  const rows = await db.query(`SELECT * FROM orders WHERE email = '${req.query.email}'`);
  res.send(`<h1>Orders for ${req.query.email}</h1>` + JSON.stringify(rows));
});

app.post('/orders/:id/refund', async (req, res) => {
  await db.query('UPDATE orders SET refunded = true WHERE id = $1', [req.params.id]);
  res.json({ ok: true, key: PAYMENT_API_KEY });
});

app.listen(3000);
