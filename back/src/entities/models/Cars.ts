import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users";


@Entity("cars")
export class Cars extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({"name": "brand"})
    brand!: string;

    @Column({"name": "model"})
    model!: string;

    @Column({"name": "year"})
    year!: number;

    @Column({"name": "number_plate"})
    number_plate!: number;

    @Column({"name": "color"})
    color!: string;

    @Column({"name": "value_approximate"})
    value_approximate!: number;

    @Column({"name": "condition"})
    condition!: string;

    @Column({"name": "user_id"})
    user_id!: number;

    @Column({"name": "image_path"})
    image_path!: string;

    @ManyToOne(() => Users, (user) => user.cars)
    @JoinColumn({"name": "user_id"})
    user!: Users;
}