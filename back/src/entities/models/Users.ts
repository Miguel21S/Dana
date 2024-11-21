import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./roles";
import { Cars } from "./Cars";
import { HelpReceived } from "./HelpReceived";
import { EmergencyContact } from "./EmergencyContact";
import { Relocation } from "./Relocation";
import { Mascots } from "./Mascots";
import { UserApartments } from "./UserApartments";
import { PersonalProperty } from "./PersonalProperty";

@Entity("users")
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({'name': 'name'})
    name!: string;

    @Column({'name': 'lastname'})
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
    
    @ManyToOne(() => Roles, (roles) => roles.users)
    @JoinColumn({'name': 'role_id'})
    role!: Roles;

    @OneToMany(() => Cars, (cars) => cars.user_id)
    cars!: Cars[];

    @OneToMany(() => HelpReceived, (helpReceived) => helpReceived.user_id)
    helpReceived!: HelpReceived[];

    @OneToMany(() => EmergencyContact, (emergencyContact) => emergencyContact.user_id)
    emergencyContact!: EmergencyContact[];

    @OneToMany(() => Relocation, (relocation) => relocation.user_id)
    relocation!: Relocation[];

    @OneToMany(() => Mascots, (mascots) => mascots.user_id)
    mascots!: Mascots[];

    @OneToMany(() => UserApartments, (userApartment) => userApartment.user_id)
    userApartment!: UserApartments[];

    @OneToMany(() => PersonalProperty, (personalProperty) => personalProperty.user_id)
    personalProperty!: PersonalProperty[];
}