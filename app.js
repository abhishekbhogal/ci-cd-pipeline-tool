import express from 'express';
import { operatorsRouter } from './routes/index.js';

const PORT = 3000;

export const app = express();

app.use( '/operators', operatorsRouter );

app.listen( PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
} );