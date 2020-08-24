import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();

app.get('/', (required, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🦄 Server started on port 3333!');
});
