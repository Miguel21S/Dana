import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Apartments } from "./Apartments";

@Entity("responsibleApartments")
export class ResponsibleApartments extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ "name": "date" })
    date!: string;

    @Column({ "name": "user_id" })
    user_id!: number;

    @Column({ "name": "apartment_id" })
    apartment_id!: number;

    @ManyToOne(() => User, (user) => user.responsibleApartments)
    @JoinColumn({ "name": "user_id" })
    user!: User;

    @ManyToOne(() => Apartments, (apartments) => apartments.responsibleApartments)
    @JoinColumn({ "name": "apartment_id" })
    apartments!: Apartments;
}