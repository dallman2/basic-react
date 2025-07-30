import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const EMPLOYEES = [
  {
    id: 1,
    name: "John",
    directReports: [
      {
        id: 2,
        name: "Emily",
        directReports: []
      },
      {
        id: 3,
        name: "Jason",
        directReports: [
          { id: 5, name: "Bill", directReports: [] },
          { id: 6, name: "Joe", directReports: [] }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Sarah",
    directReports: [{ id: 7, name: "Brad", directReports: [] }]
  },
  { id: 8, name: "Josh", directReports: [] }
];

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.json({ EMPLOYEES });
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});