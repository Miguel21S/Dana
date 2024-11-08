import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("diseases")
export class Disease extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { "name": "name" })
    name!: string;

    @Column({ "name": "description"})
    description!: string;
}