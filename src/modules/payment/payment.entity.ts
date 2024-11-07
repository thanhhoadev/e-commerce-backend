import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../order/order.entity";

@Entity()
export class Payment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentMethod: number;

    @Column()
    paymentStatus: number;

    @Column()
    paymentDate: Date;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @OneToOne(() => Order, (order) => order.payment)
    order: Order
}