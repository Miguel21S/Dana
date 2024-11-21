import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Apartments } from "./apartments";


@Entity("apartmentsMembers")
export class ApartmentsMembers extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "name"})
    name!: string;

    @Column({"name": "relation"})
    relation!: number;

    @Column({"name": "age"})
    age!: number;

    @Column({"name": "gender"})
    gender!: string;

    @Column({"name": "special_situation"})
    special_situation!: string;

    @Column({"name": "apartment_id"})
    apartment_id!: number;

    @ManyToOne(() => Apartments, (apartment) => apartment.apartmentMembers)
    @JoinColumn({"name": "apartment_id"})
    apartments!: Apartments;
}