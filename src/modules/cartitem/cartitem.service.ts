import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartItem } from "./cartitem.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartItemService {
    constructor (
        @InjectRepository(CartItem)
        private cartItemRepo: Repository<CartItem>
    ) {}

    create(cartItem: CartItem): Promise<CartItem> {
        return this.cartItemRepo.save(cartItem);
    }

    findAll() : Promise<CartItem[]> {
        return this.cartItemRepo.find()
    }

    findOne(id: number): Promise<CartItem> {
        return this.cartItemRepo.findOne({where : {id} })
    }

    async update(id: number, itemUpdate: CartItem): Promise<CartItem> {
        await this.cartItemRepo.update(id, itemUpdate);
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.cartItemRepo.delete(id)
    }
}