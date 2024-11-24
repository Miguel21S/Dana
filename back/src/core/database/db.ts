import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles } from '../../entities/models/roles';
import { Role1731800867772 } from './migrations/1731800867772-role';
import { Users } from '../../entities/models/users';
import { Users1731801109631 } from './migrations/1731801109631-users';
import { Building } from '../../entities/models/Building';
import { Buildings1732403279446 } from './migrations/1732403279446-buildings';
import { Disease } from '../../entities/models/Disease';
import { Diseases1732403391130 } from './migrations/1732403391130-diseases';
import { Apartments } from '../../entities/models/apartments';
import { Apartments1732403459282 } from './migrations/1732403459282-apartments';
import { ApartmentsMembers } from '../../entities/models/apartmentMembers';
import { ApartmentMembers1732403536244 } from './migrations/1732403536244-apartmentMembers';
import { Cars } from '../../entities/models/Cars';
import { Cars1732403639826 } from './migrations/1732403639826-cars';
import { HelpReceived } from '../../entities/models/HelpReceived';
import { HelpReceived1732403694500 } from './migrations/1732403694500-helpReceived';
import { EmergencyContact } from '../../entities/models/EmergencyContact';
import { EmergencyContact1732403751862 } from './migrations/1732403751862-emergencyContact';
import { Relocation } from '../../entities/models/Relocation';
import { Relocation1732403807017 } from './migrations/1732403807017-relocation';
import { Mascots } from '../../entities/models/Mascots';
import { Mascots1732403862159 } from './migrations/1732403862159-mascots';
import { UserApartments } from '../../entities/models/UserApartments';
import { UserApartments1732403914329 } from './migrations/1732403914329-userApartments';
import { HomeProperty } from '../../entities/models/HomeProperty';
import { HomeProperty1732403963545 } from './migrations/1732403963545-homeProperty';
import { PersonalProperty } from '../../entities/models/PersonalProperty';
import { PersonalProperty1732404006625 } from './migrations/1732404006625-personalProperty';
import { Damages } from '../../entities/models/Damages';
import { Damages1732404053433 } from './migrations/1732404053433-damages';
import { UsersDiseases } from '../../entities/models/UsersDiseases';
import { UsersDiseases1732404096562 } from './migrations/1732404096562-usersDiseases';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_connection",

    entities: [Roles, Users, Building, Disease, Apartments, ApartmentsMembers,
        Cars, HelpReceived, EmergencyContact, Relocation, Mascots, UserApartments,
        HomeProperty, PersonalProperty, Damages, UsersDiseases
    ],

    migrations: [Role1731800867772, Users1731801109631, Buildings1732403279446, Diseases1732403391130,
        Apartments1732403459282, ApartmentMembers1732403536244, Cars1732403639826, HelpReceived1732403694500,
        EmergencyContact1732403751862, Relocation1732403807017, Mascots1732403862159, UserApartments1732403914329,
        HomeProperty1732403963545, PersonalProperty1732404006625, Damages1732404053433, UsersDiseases1732404096562
    ],

    synchronize: false,
    logging: false,
})