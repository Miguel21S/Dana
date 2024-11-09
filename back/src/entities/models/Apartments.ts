import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import { Building } from "./Buildings";
import { HomeProperty } from "./HomeProperty";
import { HelpReceived } from "./HelpReceived";

@Entity("apartments")
export class Apartments {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    apartment_number!: number;

    @Column()
    number_floor!: number;

    @Column({ nullable: true })
    area_m2?: string;

    @Column({ nullable: true })
    condition?: string;

    @ManyToOne(() => Building, (building) => building.apartments)
    building!: Building;

    @OneToMany(() => HomeProperty, (homeproperty) => homeproperty.apartment_id)
    homeproperties!: HomeProperty[];

    @OneToMany(() => HelpReceived, (helpReceived) => helpReceived.apartment_id)
    helpReceived!: HelpReceived[];
}
