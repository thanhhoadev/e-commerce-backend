import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Product } from "../product/product.entity";

@Entity()
export class Favorite{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.favorites)
    user: User;

    @ManyToOne(() => Product, (product) => product.favorites)
    product: Product;
}