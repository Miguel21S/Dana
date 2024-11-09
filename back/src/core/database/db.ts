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
import { UsersDiseases } from '../../entities/models/UsersDiseases';
import { UserDiseases1731110105403 } from './migrations/1731110105403-UserDiseases';
import { HomeProperty } from '../../entities/models/HomeProperty';
import { HomeProperty1731112433694 } from './migrations/1731112433694-HomeProperty';
import { PersonalProperty } from '../../entities/models/PersonalProperty';
import { PersonalProperty1731113876694 } from './migrations/1731113876694-PersonalProperty';
import { Cars } from '../../entities/models/Cars';
import { Cars1731115048710 } from './migrations/1731115048710-Cars';
import { HelpReceived } from '../../entities/models/HelpReceived';
import { HelpRceived1731151727574 } from './migrations/1731151727574-HelpRceived';
import { EmergencyContact } from '../../entities/models/EmergencyContact';
import { EmergencyContact1731155369609 } from './migrations/1731155369609-EmergencyContact';
import { Relocation } from '../../entities/models/Relocation';
import { Relocation1731156274553 } from './migrations/1731156274553-Relocation';
import { Mascots } from '../../entities/models/Mascots';
import { Mascots1731157157593 } from './migrations/1731157157593-Mascots';
import { ResponsibleApartments } from '../../entities/models/ResponsibleApartments';
import { ResponsibleApartments1731157772130 } from './migrations/1731157772130-ResponsibleApartments';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_conection",

    entities: [Role, User, Building, Disease, Apartments, UsersDiseases, HomeProperty, PersonalProperty, Cars, HelpReceived, EmergencyContact, Relocation, Mascots, ResponsibleApartments],

    migrations: [Roles1731071614439, Users1731072300312, Buildings1731076572321,
        Diseases1731076649622, Apartments1731081556109, UserDiseases1731110105403,
        HomeProperty1731112433694, PersonalProperty1731113876694, Cars1731115048710,
        HelpRceived1731151727574, EmergencyContact1731155369609, Relocation1731156274553,
        Mascots1731157157593, ResponsibleApartments1731157772130
    ],

    synchronize: false,
    logging: false,
})