import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: "Hello from the server! 👋" });
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});