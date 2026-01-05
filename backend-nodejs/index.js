import dotenv from 'dotenv';
import { testDBConnection } from './db.js';
import express from 'express';

import helloRouter from './api/hello.js';

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3001;


// Mount API routers
app.use('/api', helloRouter);

// Global setup: connect to DB before starting server
// Global setup: test MySQL DB connection before starting server
testDBConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
