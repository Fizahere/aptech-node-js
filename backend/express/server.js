import express from 'express';
import connectDb from './db/dbConnection.js';
import { router } from './routes/apiRoutes.js';

const app = express();
const port = 4000;
connectDb();

app.use(express.json());
app.use('/test-api',router);
// app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

