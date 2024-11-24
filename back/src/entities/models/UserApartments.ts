import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users";
import { Apartments } from "./apartments";

@Entity("userApartments")
export class UserApartments extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "relation_type"})
    relation_type!: string;

    @Column({ "name": "start_date" })
    date!: Date;

    @Column({ "name": "end_date" })
    end_date!: Date;

    @Column({ "name": "user_id" })
    user_id!: number;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @ManyToOne(() => Users, (user) => user.userApartment)
    @JoinColumn({ "name": "user_id" })
    user!: Users;

    @ManyToOne(() => Apartments, (apartments) => apartments.userApartment)
    @JoinColumn({ "name": "apartment_id" })
    apartments!: Apartments;
    
}