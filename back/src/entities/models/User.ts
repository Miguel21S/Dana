import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";
import { UsersDiseases } from "./UsersDiseases";
import { PersonalProperty } from "./PersonalProperty";

@Entity('users')
export class User extends BaseEntity {
    
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

    @OneToMany(() => UsersDiseases, (usersDiseases) => usersDiseases.user_id)
    usersDiseases!: UsersDiseases[];

    @OneToMany(() => PersonalProperty, (personalProperty) => personalProperty.user_id)
    personalProperty!: PersonalProperty[];

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({'name': 'role_id'})
    role!: Role;
}