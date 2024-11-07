import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../order/order.entity";
import { ProductVariant } from "../productvariant/productvariant.entity";

@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 1 })
    quantity: number;

    @Column()
    price: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => Order, (order) => order.items)
    order: Order;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.orderItems)
    productVariant: ProductVariant;
}