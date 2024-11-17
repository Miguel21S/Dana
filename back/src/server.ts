import express, { Application } from 'express';
import 'dotenv/config';
import { AppDataSource } from './core/database/db';
import routerController from './controllers/router';


const app: Application = express();
const PORT =process.env.PORT || 3001;

app.use(express.json());
app.use('/api', routerController);

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
    })
    .catch(error => {
        console.log(error)
    })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

