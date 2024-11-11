import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity("emergencyContact")
export class EmergencyContact extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "contactName"})
    contactName!: string;

    @Column({"name": "contactPhone"})
    contactPhone!: string;

    @Column({"name": "contactEmail"})
    contactEmail!: string;

    @Column({"name": "relationship"})
    relationship!: string;

    @Column({"name": "user_id"})
    user_id!: number;

    // @ManyToOne(() => Users, (user) => user.emergencyContact)
    // @JoinColumn({"name": "user_id"})
    // user!: Users;
}