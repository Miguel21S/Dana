import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    quantityApartments!: number;

    @Column({ "name": "floor_number" })
    floorNumber!: number;

    @Column({ "name": "build_type" })
    buildType!: string;
}