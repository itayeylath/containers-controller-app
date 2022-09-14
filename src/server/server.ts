import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import ownersRouter from "./routes/owners-routs"
import locationsRouter from "./routes/locations-routs"
import containersRouter from "./routes/containers-routs"
import locationsHistoryRouter from "./routes/loctions-history-routs"

const app: Express = express();
app.use(cors());
app.use(json());
app.use(express.json({limit: '1mb'}));
const root: string = path.join(process.cwd(), './client');
app.use(express.static(root));

app.get('/', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

//All client requests to containers, owners, locations and location historys- data. 
app.use('/owners', ownersRouter)
app.use('/locations', locationsRouter)
app.use('/containers', containersRouter)
app.use('/locationshistory', locationsHistoryRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});

