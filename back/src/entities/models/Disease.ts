import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersDiseases } from "./UsersDiseases";

@Entity("diseases")
export class Disease extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { "name": "name" })
    name!: string;

    @Column({ "name": "description"})
    description!: string;

    @OneToMany(() => UsersDiseases, (usersDiseases) => usersDiseases.disease_id)
    usersDiseases!: UsersDiseases[];
}