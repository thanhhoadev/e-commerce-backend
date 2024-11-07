import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "../cart/cart.entity";
import { ProductVariant } from "../productvariant/productvariant.entity";

@Entity()
export class CartItem{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 1 })
    quantity: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => Cart, (cart) => cart.items)
    cart: Cart;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.cartItems)
    productVariant: ProductVariant;
}