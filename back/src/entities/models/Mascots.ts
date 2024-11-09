import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("mascots")
export class Mascots extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "name" })
    name!: string;

    @Column({ "name": "species" })
    species!: string;

    @Column({ "name": "race" })
    race!: string;

    @Column({ "name": "age" })
    age!: number;

    @Column({ "name": "condition" })
    condition!: string;

    @Column({ "name": "user_id" })
    user_id!: number;

    @ManyToOne(() => User, (user) => user.mascots)
    @JoinColumn({ "name": "user_id" })
    user!: User;
}