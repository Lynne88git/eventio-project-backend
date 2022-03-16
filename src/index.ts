import express, {Request, Response} from 'express'
import cors from 'cors'
import {routes} from './routes'

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:8080"]
}));
app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
});

routes(app)

app.listen(8080, ()=> {
    console.log("listening on port 8080")
});