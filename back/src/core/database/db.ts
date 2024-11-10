import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles } from '../../entities/models/Roles';
import { Role1731262325555 } from './migrations/1731262325555-Role';
import { Users } from '../../entities/models/Users';
import { Disease } from '../../entities/models/Diseases';
import { Apartments } from '../../entities/models/Apartments';
import { UsersDiseases } from '../../entities/models/UsersDiseases';
import { HomeProperty } from '../../entities/models/HomeProperty';
import { PersonalProperty } from '../../entities/models/PersonalProperty';
import { Cars } from '../../entities/models/Cars';
import { HelpReceived } from '../../entities/models/HelpReceived';
import { EmergencyContact } from '../../entities/models/EmergencyContact';
import { Relocation } from '../../entities/models/Relocation';
import { Mascots } from '../../entities/models/Mascots';
import { UserApartments } from '../../entities/models/UserApartments';
import { Damages } from '../../entities/models/Damages';
import { Users1731262609503 } from './migrations/1731262609503-Users';
import { Apartments1731081556109 } from './migrations/1731081556109-Apartments';
import { HomeProperty1731112433694 } from './migrations/1731112433694-HomeProperty';
import { UserDiseases1731110105403 } from './migrations/1731110105403-UserDiseases';
import { PersonalProperty1731113876694 } from './migrations/1731113876694-PersonalProperty';
import { Cars1731115048710 } from './migrations/1731115048710-Cars';
import { EmergencyContact1731155369609 } from './migrations/1731155369609-EmergencyContact';
import { Relocation1731156274553 } from './migrations/1731156274553-Relocation';
import { Mascots1731157157593 } from './migrations/1731157157593-Mascots';
import { UserApartments1731157772130 } from './migrations/1731157772130-UserApartments';
import { Damages1731256609329 } from './migrations/1731256609329-Damages';
import { Diseases1731076649622 } from './migrations/1731076649622-Diseases';
import { Building } from '../../entities/models/Buildings';
import { Buildings1731076572321 } from './migrations/1731076572321-Buildings';
import { HelpRceived1731151727574 } from './migrations/1731151727574-HelpRceived';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_connection",

    entities: [Roles, Users, Building, Disease, Apartments, UsersDiseases, HomeProperty, PersonalProperty,
        Cars, HelpReceived, EmergencyContact, Relocation, Mascots, UserApartments, Damages
    ],

    migrations: [Role1731262325555, Users1731262609503, Buildings1731076572321, Diseases1731076649622,
        Apartments1731081556109, UserDiseases1731110105403, HomeProperty1731112433694,
        PersonalProperty1731113876694, Cars1731115048710, HelpRceived1731151727574,
        EmergencyContact1731155369609, Relocation1731156274553, Mascots1731157157593,
        UserApartments1731157772130, Damages1731256609329

    ],

    synchronize: false,
    logging: false,
})