import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../product/product.entity";

@Entity()
export class ImageProduct{
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    isPrimary: boolean;

    @Column({ default: "" })
    url: string;

    @ManyToOne( () => Product, (product) => product.images )
    product: Product;

}