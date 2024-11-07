import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ImageProductVariant } from "../imageproductvariant/imageproductvariant.entity";
import { CartItem } from "../cartitem/cartitem.entity";
import { OrderItem } from "../orderitem/orderitem.entity";
import { Product } from "../product/product.entity";

@Entity()
export class ProductVariant{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    isPrimary: boolean;

    @Column({ default: 0 })
    price: number;

    @Column({ default: 0 })
    priceSell: number;

    @Column({ default: 0 })
    stock: number;

    @Column({ default: "white" })
    color: string;

    @Column({ default: "M"})
    size: string;

    @ManyToOne(() => Product, (product) => product.productVariants)
    product: Product;

    @OneToMany(() => ImageProductVariant, (images) => images.productVariant)
    images: ImageProductVariant[];

    @OneToMany(() => CartItem, (item) => item.productVariant)
    cartItems: CartItem[];

    @OneToMany(() => OrderItem, (item) => item.productVariant)
    orderItems: OrderItem[];
    
}