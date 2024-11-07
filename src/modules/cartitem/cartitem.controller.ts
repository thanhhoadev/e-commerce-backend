import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CartItemService } from "./cartitem.service";
import { CartItem } from "./cartitem.entity";

@Controller('cartitem')
export class CartItemController {
    constructor ( private readonly cartItemService: CartItemService) {}

    @Post()
    async create(@Body() item: CartItem) {
        return this.cartItemService.create(item)
    }

    @Get()
    async findAll() {
        return this.cartItemService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.cartItemService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id: number, itemUpdate: CartItem) {
        return this.cartItemService.update(id, itemUpdate)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.cartItemService.delete(id)
    }
}