import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles1730985320031 } from './migrations/1730985320031-roles';
import { Buildings1731019074414 } from './migrations/1731019074414-buildings';
import { Users1730985310352 } from './migrations/1730985310352-users';
import { Apartments1731019097521 } from './migrations/1731019097521-apartments';
import { Diseases1731019122672 } from './migrations/1731019122672-diseases';
import { Cars1731019245531 } from './migrations/1731019245531-cars';
import { Damages1731019274916 } from './migrations/1731019274916-damages';
import { HelpReceived1731019295116 } from './migrations/1731019295116-help_received';
import { HomeProperty1731019223928 } from './migrations/1731019223928-home_property';
import { EmergencyContact1731019311265 } from './migrations/1731019311265-emergency_contact';
import { Relocation1731019339171 } from './migrations/1731019339171-relocation';
import { Mascots1731019369378 } from './migrations/1731019369378-mascots';
import { ResponsibleApartments1731025233480 } from './migrations/1731025233480-responsible_apartments';
import { PersonalProperty1731026673822 } from './migrations/1731026673822-personal_property';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "raiz",
    password: process.env.DB_PASSWORD || "3311",
    database: process.env.DB_DATABASE || "dana_conection",

    migrations: [Roles1730985320031, Users1730985310352 ],

    synchronize: false,
    logging: false,
})