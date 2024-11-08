import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Building } from "./Buildings";

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
}
