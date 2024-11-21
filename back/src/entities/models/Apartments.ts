import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Building } from "./Building";
import { ApartmentsMembers } from "./apartmentMembers";
import { HelpReceived } from "./HelpReceived";
import { Relocation } from "./Relocation";

@Entity("apartments")
export class Apartments {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "apartment_number"})
    apartment_number!: number;

    @Column({"name": "number_floor"})
    number_floor!: number;

    @Column({"name": "area_m2"})
    area_m2!: string;

    @Column({"name": "condition"})
    condition!: string;

    @ManyToOne(() => Building, (building) => building.apartments)
    buildings!: Building;

    @OneToMany(() => ApartmentsMembers, (apartmentMember) => apartmentMember.apartment_id)
    apartmentMembers!: ApartmentsMembers[];
    
    @OneToMany(() => HelpReceived, (helpReceived) => helpReceived.apartment_id)
    helpReceived!: HelpReceived[];

    @OneToMany(() => Relocation, (relocation) => relocation.apartment_id)
    relocation!: Relocation[];
    
    // @OneToMany(() => HomeProperty, (homeProperty) => homeProperty.apartment_id)
    // homeProperties!: HomeProperty[];
    
    // @OneToMany(() => Damages, (damage) => damage.apartment_id)
    // damages!: Damages[];

    // @OneToMany(() => UserApartments, (userApartment) => userApartment.apartment_id)
    // userApartment!: UserApartments[];


}