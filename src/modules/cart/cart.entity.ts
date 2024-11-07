import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { CartItem } from "../cartitem/cartitem.entity";

@Entity()
export class Cart{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.carts)
    user: User;

    @OneToMany(() => CartItem, (items) => items.cart)
    items: CartItem[];
}