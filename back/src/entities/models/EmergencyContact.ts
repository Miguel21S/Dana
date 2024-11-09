import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

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

    @Column({"name": "usee_id"})
    usee_id!: number;

    @ManyToMany(() => User, (user) => user.emergencyContact)
    @JoinColumn({"name": "user_id"})
    user!: User;
}