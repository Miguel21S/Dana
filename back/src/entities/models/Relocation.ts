import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Apartments } from "./apartments";


@Entity("relocation")
export class Relocation extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "new_address" })
    new_address!: string;

    @Column({ "name": "postal_code" })
    postal_code!: string;

    @Column({ "name": "city" })
    city!: string;

    @Column({ "name": "province" })
    province!: string;

    @Column({ "name": "build_type" })
    build_type!: string;

    @Column({ "name": "floor_number" })
    floor_number!: number;
    
    @Column({ "name": "date_relocation" })
    date_relocation!: Date;

    @Column({ "name": "reason_relocation" })
    reason_relocation!: string;

    @Column({ "name": "estimated_duration" })
    estimated_duration!: string;

    @Column({ "name": "user_id" })
    user_id!: number;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @ManyToOne(() => Users, (user) => user.relocation)
    @JoinColumn({ "name": "user_id" })
    user!: Users;

    @ManyToOne(() => Apartments, (apartment) => apartment.relocation)
    @JoinColumn({ "name": "apartment_id" })
    apartment!: Apartments;
}