import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Disease } from "./Diseases";

@Entity("usersDiseases")
export class UsersDiseases extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "user_id" })
    user_id!: number;
    
    @Column({ "name": "disease_id" })
    disease_id!: number;

    @ManyToMany(() => Users, (user) => user.usersDiseases)
    @JoinColumn({"name": "user_id"})
    user!: Users;

    @ManyToMany(() => Disease, (disease) => disease.usersDiseases)
    @JoinColumn({"name": "disease_id"})
    disease!: Disease;
}