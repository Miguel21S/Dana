import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "name"})
    name!: string;

    @OneToMany(()=> User, (user) => user.role_id)
    users!: User[];
}