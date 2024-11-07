import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Shop } from "../shop/shop.entity";

@Entity()
export class Follow{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.follows)
    user: User;

    @ManyToOne(() => Shop, (shop) => shop.follows)
    shop: Shop;
}