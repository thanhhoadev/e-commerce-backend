import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ProductVariant } from "../productvariant/productvariant.entity";

@Entity()
export class ImageProductVariant{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    url: string;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.images)
    productVariant: ProductVariant;
}