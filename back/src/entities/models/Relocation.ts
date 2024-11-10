import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Apartments } from "./Apartments";

@Entity("relocation")
export class Relocation extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "newAddress" })
    newAddress!: string;

    @Column({"name": "postalCode"})
    postalCode!: string;

    @Column({"name": "city"})
    city!: string;

    @Column({"name": "province"})
    province!: string;

    @Column({"name": "buildType"})
    buildType!: string;

    @Column({"name": "floorNumber"})
    floorNumber!: number;

    @Column({"name": "reasonRelocation"})
    reasonRelocation!: number;

    @Column({"name": "estimatedDuration"})
    estimatedDuration!: number;

    @Column({"name": "user_id"})
    user_id!: number;

    @Column({"name": "partment_id"})
    apartment_id!: number;

    @ManyToOne(() => Users, (user) => user.relocation)
    @JoinColumn({"name": "user_id"})
    user!: Users;

    @ManyToOne(()=> Apartments, (apartment) => apartment.relocation)
    @JoinColumn({"name": "partment_id"})
    apartment!: Apartments;
}