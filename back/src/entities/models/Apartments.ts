import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import { Building } from "./Buildings";
import { HomeProperty } from "./HomeProperty";
import { HelpReceived } from "./HelpReceived";
import { Damages } from "./Damages";
import { Relocation } from "./Relocation";
import { UserApartments } from "./UserApartments";


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
    buildings!: Building;

    @OneToMany(() => HomeProperty, (homeProperty) => homeProperty.apartment_id)
    homeProperties!: HomeProperty[];
    
    @OneToMany(() => Damages, (damage) => damage.apartment_id)
    damages!: Damages[];

    @OneToMany(() => HelpReceived, (helpReceived) => helpReceived.apartment_id)
    helpReceived!: HelpReceived[];

    @OneToMany(() => UserApartments, (userApartment) => userApartment.apartment_id)
    userApartment!: UserApartments[];


    @OneToMany(() => Relocation, (location) => location.apartment_id)
    relocation!: Relocation[];
}
