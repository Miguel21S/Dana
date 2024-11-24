import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Apartments } from "./Apartments";
import { Damages } from "./Damages";

@Entity("buildings")
export class Building extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "address" })
    address!: string;

    @Column({ "name": "number_build" })
    number_build!: number;

    @Column({ "name": "postal_code" })
    postalCode!: string;

    @Column({ "name": "city" })
    city!: string;

    @Column({ "name": "province" })
    province!: string;

    @Column({ "name": "quantity_apartment" })
    quantity_apartment!: number;

    @Column({ "name": "floor_number" })
    floor_number!: number;

    @Column({ "name": "build_type" })
    build_type!: string;

    @OneToMany(() => Apartments, (apartment) => apartment.buildings)
    apartments!: Apartments[];

    @OneToMany(() => Damages, (damage) => damage.building)
    damages!: Damages[];

}