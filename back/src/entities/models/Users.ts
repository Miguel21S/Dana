import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./roles";
import { Cars } from "../Cars";

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
}