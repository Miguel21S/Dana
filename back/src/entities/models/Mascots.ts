import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users";


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

    @Column({ "name": "image_path" })
    image_path!: string;

    @Column({ "name": "user_id" })
    user_id!: number;

    @ManyToOne(() => Users, (user) => user.mascots)
    @JoinColumn({ "name": "user_id" })
    user!: Users;
}