import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrderItemService } from "./orderitem.service";
import { CreateOrderItemDto } from "./dto/create-orderitem.dto";
import { UpdateOrderItemDto } from "./dto/update-orderitem.dto";

@Controller('OrderItems')
export class OrderItemController {
    constructor( private readonly orderItemService: OrderItemService) {}

    @Post()
    async create(@Body() createOrderItemDto : CreateOrderItemDto) {
        return this.orderItemService.create(createOrderItemDto);
    }

    @Get()
    async findAll() {
        return this.orderItemService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.orderItemService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
        return this.update(id, updateOrderItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return this.orderItemService.remove(id);
    }
}