
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Apartments } from "./Apartments";
import { PersonalProperty } from "./PersonalProperty";
import { HomeProperty } from "./HomeProperty";
import { Building } from "./Buildings";

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

    @Column({"name": "building_id"})
    building_id!: number;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @Column({"name": "personal_property_id"})
    personal_property_id!: number;

    @Column({"name": "home_property_id"})
    home_property_id!: number;

    @ManyToOne(() => Building, (building) => building.damages)
    @JoinColumn({"name": "building_id"})
    building!: Building;

    @ManyToOne(() => Apartments, (apartment) => apartment.damages)
    @JoinColumn({"name": "apartment_id"})
    apartment!: Apartments;

    @ManyToOne(() => PersonalProperty, (personalProperty) => personalProperty.damages)
    @JoinColumn({"name": "personal_property_id"})
    personalProperty!: PersonalProperty;

    @ManyToOne(() => HomeProperty, (homeProperty) => homeProperty.damages)
    @JoinColumn({"name": "home_property_id"})
    homeProperty!: HomeProperty;

}