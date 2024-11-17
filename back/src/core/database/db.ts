import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role1731800867772 } from './migrations/1731800867772-role';
import { Users1731801109631 } from './migrations/1731801109631-users';
import { Roles } from '../../entities/models/roles';
import { Users } from '../../entities/models/users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_connection",

    entities: [ Roles, Users
    ],

    migrations: [ Role1731800867772, Users1731801109631

    ],

    synchronize: false,
    logging: false,
})