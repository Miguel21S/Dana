import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
// import { Users1730985310352 } from './migrations/1730985310352-users';
import { Roles1730985320031 } from './migrations/1730985320031-roles';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_conection",

    // migrations: [Users1730985310352],
    migrations: [Roles1730985320031, ],


    
    synchronize: false,
    logging: false,
})