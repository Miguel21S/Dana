import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("mascots")
export class Mascots extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { "name": "name" })
    name!: string;

    @Column("varchar", { "name": "species" })
    species!: string;

    @Column("varchar", { "name": "race" })
    race!: string;

    @Column("varchar", { "name": "age" })
    age!: number;

    @Column("varchar", { "name": "condition" })
    condition!: string;

    @Column("varchar", { "name": "user_id" })
    user_id!: number;

    @ManyToOne(() => User, (user) => user.mascots)
    @JoinColumn({ "name": "user_id" })
    user!: User;
}