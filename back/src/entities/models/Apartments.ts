import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("apartments")
export class APartments extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "apartament_number"})
    apartamentNumber!: number;

    @Column({ "name": "number_floor"})
    number_floor!: number;

    @Column({ "name": "area_m2"})
    area_m2!: number;

    @Column({"name": "condition"})
    condition!: string;
}