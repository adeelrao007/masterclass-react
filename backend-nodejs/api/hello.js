import { Router } from 'express';

const router = Router();

// Sample API route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

export default router;
