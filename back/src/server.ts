import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { AppDataSource } from './core/database/db';
import routerController from './controllers/router';
import routerUsers from './entities/users/router';
import { auth } from './core/middleware/auth';


const app: Application = express();
const PORT =process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/api', routerController);
app.use('/api', auth, routerUsers);

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

