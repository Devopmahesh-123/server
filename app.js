import express from 'express';
import router from './router/router.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const  API_PORT = process.env.PORT || 2035;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// db();

const apiRouter = express.Router();
app.use('/api/v1', apiRouter);
apiRouter.use('/dashboard',router.access_code_routes);


// Routes for displaying home page.
app.get('/', (req, res) => {
    res.send('<h3>Wecome to node server!</h3>')
})

app.listen(API_PORT, () => {
    console.log(`server is running at port ${API_PORT}`);
})