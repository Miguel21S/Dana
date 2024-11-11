import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UsersDiseases } from "./UsersDiseases";
import { PersonalProperty } from "./PersonalProperty";
import { HelpReceived } from "./HelpReceived";
import { Cars } from "./Cars";
import { EmergencyContact } from "./EmergencyContact";
import { Relocation } from "./Relocation";
import { Mascots } from "./Mascots";
import { Roles } from "./Roles";
import { UserApartments } from "./UserApartments";

@Entity('users')
export class Users extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({'name': 'name'})
    username!: string;

    @Column({'name': 'lastName'})
    lastname!: string;

    @Column({'name': 'date_born'})
    date_born!: Date;

    @Column({'name': 'gender'})
    gender!: string;

    @Column({'name': 'phone'})
    phone!: string;
    
    @Column({'name': 'email'})
    email!: string;
    
    @Column({'name': 'password'})
    password!: string;
    
    @Column({'name': 'role_id'})
    role_id!: number;
    
    @ManyToOne(() => Roles, (role) => role.users)
    @JoinColumn({'name': 'role_id'})
    role!: Roles;
 
    @OneToMany(()=> HelpReceived, (helpReceived) => helpReceived.user_id)
    helpReceived!: HelpReceived[];
    
    @OneToMany(() => Cars, (cars) => cars.user_id)
    cars!: Cars[];
    
    @OneToMany(() => EmergencyContact, (emergencyContact) => emergencyContact.user_id)
    emergencyContact!: EmergencyContact[];
    
    @OneToMany(() => Relocation, (location) => location.user_id)
    relocation!: Relocation[];
    
    @OneToMany(() => Mascots, (mascots) => mascots.user_id)
    mascots!: Mascots[];
    
    @OneToMany(() => UserApartments, (userApartments) => userApartments.user_id)
    userApartments!: UserApartments[];
    
    @OneToMany(() => PersonalProperty, (personalProperty) => personalProperty.user_id)
    personalProperty!: PersonalProperty[];
    
    @OneToMany(() => UsersDiseases, (usersDiseases) => usersDiseases.user_id)
    usersDiseases!: UsersDiseases[];

}