import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Controller('Orders')
export class OrderController {
    constructor ( private readonly orderService : OrderService ) {}

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.create(createOrderDto);
    }

    @Get()
    async findAll() {
        return this.orderService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.orderService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, updateOrderDto: UpdateOrderDto) {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.orderService.remove(id)
    }

}

