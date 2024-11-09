import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Apartments } from "./Apartments";

@Entity("helpReceived")
export class HelpReceived extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "name"})
    name!: string;

    @Column({"name": "quantity"})
    quantity!: string;

    @Column({"name": "description"})
    description!: string;

    @Column({"name": "date_received"})
    date_received!: Date;

    @Column({"name": "organization"})
    organization!: string;

    @Column({"name": "mount"})
    mount!: number;

    @Column({"name": "user_id"})
    user_id!: number;

    @Column({"name": "apartment"})
    apartment_id!: number;

    @ManyToOne(() => User, (user) => user.helpReceived)
    @JoinColumn({"name": "user_id"})
    user!: User;

    @ManyToOne(() => Apartments, (apartment) => apartment.helpReceived)
    @JoinColumn({"name": "apartment_id"})
    apartment!: Apartments;
}