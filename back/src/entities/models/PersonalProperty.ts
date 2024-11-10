import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Damages } from "./damages";


@Entity("personalProperty")
export class PersonalProperty extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "description"})
    description!: string;

    @Column({"name": "value_approximate"})
    value_approximate!: number;

    @Column({"name": "condition"})
    condition!: number;

    @Column({"name": "user_id"})
    user_id!: number;

    @ManyToOne(() => User, (user) => user.personalProperty )
    @JoinColumn({"name": "user_id"})
    user!: User;

    @OneToMany(() => Damages, (damage) => damage.personal_id)
    damages!: Damages[];
}