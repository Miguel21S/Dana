import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";
import { Building } from "./Building";
import { Apartments } from "./apartments";
import { Cars } from "./Cars";
import { Mascots } from "./Mascots";
import { HomeProperty } from "./HomeProperty";
import { PersonalProperty } from "./PersonalProperty";


@Entity("imagens")
export class Imagens extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ "name": "entity_type" })
    entity_type!: string;

    @Column({ "name": "entity_id" })
    entity_id!: number;

    @Column({ "name": "image_url" })
    image_url!: string;

    @Column({ "name": "description" })
    description?: string;

    @Column({ "name": "upload_date" })
    upload_date!: Date;
}