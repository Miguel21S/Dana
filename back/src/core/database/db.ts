import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role } from '../../entities/models/Role';
import { User } from '../../entities/models/User';
import { Roles1731071614439 } from './migrations/1731071614439-Roles';
import { Users1731072300312 } from './migrations/1731072300312-Users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_conection",

    entities: [Role, User],
    migrations: [Roles1731071614439, Users1731072300312
    ],

    synchronize: false,
    logging: false,
})