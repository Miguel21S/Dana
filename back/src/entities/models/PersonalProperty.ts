import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Damages } from "./Damages";


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

    @ManyToOne(() => Users, (user) => user.personalProperty )
    @JoinColumn({"name": "user_id"})
    user!: Users;

    @OneToMany(() => Damages, (damage) => damage.personal_property_id)
    damages!: Damages[];
}