import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import ownersRouter from "./routs/owners-routs"
import locationsRouter from "./routs/locations-routs"
import containersRouter from "./routs/containers-routs"
import locationsHistoryRouter from "./routs/loctions-history-routs"

const app: Express = express();
app.use(cors());
app.use(json());
app.use(express.json({limit: '1mb'}));
const root: string = path.join(process.cwd(), 'dist');
app.use(express.static(root));

app.get('/', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

//All client requests to containers, owners, locations and location historys- data. 
app.use('/owners', ownersRouter)
app.use('/locations', locationsRouter)
app.use('/containers', containersRouter)
app.use('/locationshistory', locationsHistoryRouter)

//TODO: delete
app.get('/data', (_req, res) => {
  console.log("Processing /data");
  res.send({message: "Hello world"});
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});

