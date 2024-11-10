
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Apartments } from "./Apartments";
import { PersonalProperty } from "./PersonalProperty";
import { HomeProperty } from "./HomeProperty";

@Entity("damages")
export class Damages extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "type_damage" })
    type_damage!: Date;

    @Column({ "name": "severity" })
    severity!: number;

    @Column({ "name": "estimated_repair_cost" })
    estimated_repair_cost!: Date;

    @Column({ "name": "description" })
    description!: string;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @Column({"name": "personal_id"})
    personal_id!: number;

    @Column({"name": "home_id"})
    home_id!: number;

    @ManyToOne(() => Apartments, (apartment) => apartment.damages)
    @JoinColumn({"name": "apartment_id"})
    apartment!: Apartments;

    @ManyToOne(() => PersonalProperty, (personalProperty) => personalProperty.damages)
    @JoinColumn({"name": "personal_id"})
    personalProperty!: PersonalProperty;

    @ManyToOne(() => HomeProperty, (homeProperty) => homeProperty.damages)
    @JoinColumn({"name": "home_id"})
    homeProperty!: HomeProperty;

}