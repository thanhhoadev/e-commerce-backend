import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart } from "./cart.entity";

@Controller('cart')
export class CartController {
    constructor ( private readonly cartService : CartService) {}

    @Post()
    async create(cart: Cart) {
        return this.cartService.create(cart)
    }

    @Get()
    async findAll() {
        return this.cartService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.cartService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() cartUpdae: Cart) {
        return this.cartService.update(id, cartUpdae)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.cartService.delete(id)
    }
}