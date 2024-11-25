import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Building } from "./Building";
import { ApartmentsMembers } from "./ApartmentMembers";
import { HelpReceived } from "./HelpReceived";
import { Relocation } from "./Relocation";
import { UserApartments } from "./UserApartments";
import { HomeProperty } from "./HomeProperty";
import { Damages } from "./Damages";

@Entity("apartments")
export class Apartments {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "apartament_number"})
    apartament_number!: number;

    @Column({"name": "number_floor"})
    number_floor!: number;

    @Column({"name": "area_m2"})
    area_m2!: string;

    @Column({"name": "condition"})
    condition!: string;

    @Column({"name": "building_id"})
    building_id!: number;

    @ManyToOne(() => Building, (building) => building.apartments)
    @JoinColumn({"name": "building_id"})
    buildings!: Building;

    @OneToMany(() => ApartmentsMembers, (apartmentMember) => apartmentMember.apartment_id)
    apartmentMembers!: ApartmentsMembers[];
    
    @OneToMany(() => HelpReceived, (helpReceived) => helpReceived.apartment_id)
    helpReceived!: HelpReceived[];

    @OneToMany(() => Relocation, (relocation) => relocation.apartment_id)
    relocation!: Relocation[];
    
    @OneToMany(() => UserApartments, (userApartment) => userApartment.apartment_id)
    userApartment!: UserApartments[];

    @OneToMany(() => HomeProperty, (homeProperty) => homeProperty.apartment_id)
    homeProperty!: HomeProperty[];
    
    @OneToMany(() => Damages, (damage) => damage.apartment_id)
    damages!: Damages[];



}