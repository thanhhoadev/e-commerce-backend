import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "./cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartService {
    constructor (
        @InjectRepository(Cart)
        private cartRepo: Repository<Cart>
    ) {}

    create(cart: Cart): Promise<Cart> {
        return this.cartRepo.save(cart)
    }

    findAll(): Promise<Cart[]> {
        return this.cartRepo.find()
    }

    findOne(id: number): Promise<Cart> {
        return this.cartRepo.findOne({ where : { id } })
    }

    async update(id: number, cartUpdate: Cart): Promise<Cart> {
        await this.cartRepo.update(id, cartUpdate)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.cartRepo.delete(id)
    }
}