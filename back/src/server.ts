import express, { Application } from 'express';
import 'dotenv/config';
import { AppDataSource } from './core/database/db';
import { register, login } from './controllers/authController';


const app: Application = express();
const PORT =process.env.PORT || 3001;

app.use(express.json());
app.post('/api/auth', register);

app.post('/api/auth/login', login);

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

