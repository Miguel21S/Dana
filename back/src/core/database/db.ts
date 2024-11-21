import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role1731800867772 } from './migrations/1731800867772-role';
import { Users1731801109631 } from './migrations/1731801109631-users';
import { Roles } from '../../entities/models/roles';
import { Users } from '../../entities/models/users';
import { Building } from '../../entities/models/Building';
import { Building1732147504718 } from './migrations/1732147504718-building';
import { Apartments } from '../../entities/models/apartments';
import { Apartments1732150168072 } from './migrations/1732150168072-apartments';
import { ApartmentMembers1732148044881 } from './migrations/1732148044881-apartmentMembers';
import { ApartmentsMembers } from '../../entities/models/apartmentMembers';
import { Disease } from '../../entities/models/Disease';
import { Disease1732157980253 } from './migrations/1732157980253-disease';
import { Cars } from '../../entities/models/Cars';
import { Cars1732158255706 } from './migrations/1732158255706-cars';
import { HelpReceived } from '../../entities/models/HelpReceived';
import { HelpReceived1732203326025 } from './migrations/1732203326025-helpReceived';
import { EmergencyContact } from '../../entities/models/EmergencyContact';
import { EmergencyContact1732204501649 } from './migrations/1732204501649-emergencyContact';
import { Relocation } from '../../entities/models/Relocation';
import { Relocation1732228633501 } from './migrations/1732228633501-relocation';
import { Mascots } from '../../entities/models/Mascots';
import { Mascots1732230742176 } from './migrations/1732230742176-mascots';
import { UserApartments } from '../../entities/models/UserApartments';
import { UserApartments1732231147902 } from './migrations/1732231147902-userApartments';
import { HomeProperty } from '../../entities/models/HomeProperty';
import { HomeProperty1732231936330 } from './migrations/1732231936330-homeProperty';
import { PersonalProperty } from '../../entities/models/PersonalProperty';
import { PersonalProperty1732232460106 } from './migrations/1732232460106-personalProperty';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_connection",

    entities: [ Roles, Users, Building, Disease, Apartments, ApartmentsMembers, Cars, HelpReceived,
        EmergencyContact, Relocation, Mascots, UserApartments, HomeProperty, PersonalProperty
    ],

    migrations: [ Role1731800867772, Users1731801109631, Building1732147504718, Disease1732157980253,
        Apartments1732150168072, ApartmentMembers1732148044881, Cars1732158255706, HelpReceived1732203326025,
        EmergencyContact1732204501649, Relocation1732228633501, Mascots1732230742176,UserApartments1732231147902,
        HomeProperty1732231936330, PersonalProperty1732232460106
    ],

    synchronize: false,
    logging: false,
})