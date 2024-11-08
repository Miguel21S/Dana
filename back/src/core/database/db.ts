import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role } from '../../entities/models/Role';
import { User } from '../../entities/models/User';
import { Roles1731071614439 } from './migrations/1731071614439-Roles';
import { Users1731072300312 } from './migrations/1731072300312-Users';
import { Disease } from '../../entities/models/Diseases';
import { Buildings1731076572321 } from './migrations/1731076572321-Buildings';
import { Diseases1731076649622 } from './migrations/1731076649622-Diseases';
import { Building } from '../../entities/models/Buildings';
import { Apartments } from '../../entities/models/Apartments';
import { Apartments1731081556109 } from './migrations/1731081556109-Apartments';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_conection",

    entities: [Role, User, Building, Disease, Apartments],
    migrations: [Roles1731071614439, Users1731072300312, Buildings1731076572321,
        Diseases1731076649622, Apartments1731081556109
    ],

    synchronize: false,
    logging: false,
})