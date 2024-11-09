import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Apartments } from "./Apartments";

@Entity("homeProperty")
export class HomeProperty extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "description" })
    description!: string;

    @Column({ "name": "value_approximate" })
    value_approximate!: number;

    @Column({ "name": "condition" })
    condition!: string;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @ManyToOne(() => Apartments, (apartments) => apartments.homeproperties)
    @JoinColumn({ "name": "apartment_id"})
    apartments!: Apartments;

}