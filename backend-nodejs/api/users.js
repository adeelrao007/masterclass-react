import { Router } from 'express';
import { getDB } from '../db.js';

const router = Router();

// GET /api/users - fetch all users
router.get('/users', async (req, res) => {
  try {
    const [rows] = await getDB().query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
