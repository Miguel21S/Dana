import express, { Application } from 'express';
import 'dotenv/config';
import { AppDataSource } from './core/database/db';

const app: Application = express();
const PORT =process.env.PORT || 3001;

app.use(express.json());
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

