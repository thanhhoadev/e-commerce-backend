import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "../orderitem/orderitem.entity";
import { User } from "../user/user.entity";
import { Payment } from "../payment/payment.entity";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    shippingAddress: string;

    @Column()
    recipientName: string;

    @Column()
    recipientPhone: string;

    @Column()
    note: string;

    @Column()
    status: number;

    @Column()
    total: number;

    @Column()
    feeShip: number;

    @Column()
    totalCOD: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    shippingDate: Date;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    items: OrderItem[]

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @OneToOne(() => Payment, payment => payment.order)
    payment: Payment;
}