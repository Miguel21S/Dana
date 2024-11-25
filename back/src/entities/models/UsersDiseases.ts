import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Disease } from "./Disease";


@Entity("usersDiseases")
export class UsersDiseases extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "user_id" })
    user_id!: number;
    
    @Column({ "name": "disease_id" })
    disease_id!: number;

    @ManyToOne(() => Users, (user) => user.usersDiseases)
    @JoinColumn({ "name": "user_id" })
    user!: Users;

    @ManyToOne(() => Disease, (disease) => disease.usersDiseases)
    @JoinColumn({ "name": "disease_id" })
    disease!: Disease;
}