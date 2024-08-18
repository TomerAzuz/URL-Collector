import express from 'express';
import { fetchMetadata } from '../services/metadataService.js';

const router = express.Router();

router.post('/fetch-metadata', async (req, res) => {
  const { urls } = req.body;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid input. Provide an array of URLs.' });
  }

  try {
    const results = await Promise.all(urls.map(fetchMetadata));
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
