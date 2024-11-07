import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Product } from "../product/product.entity";
import { ImageReview } from "../imagereview/imagereview.entity";

@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    description: string;

    @Column({ default: 0 })
    rating: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @OneToMany(()=> ImageReview, (image) => image.review)
    images: ImageReview[];

    @ManyToOne(()=> User, (user) => user.reviews )
    user: User;

    @ManyToOne(()=> Product, (product) => product.reviews)
    product: Product;
}