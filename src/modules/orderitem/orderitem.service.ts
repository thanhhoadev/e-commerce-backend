import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "./orderitem.entity";
import { Repository } from "typeorm";
import { CreateOrderItemDto } from "./dto/create-orderitem.dto";
import { UpdateOrderItemDto } from "./dto/update-orderitem.dto";

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItem)
        private orderItemRepository: Repository<OrderItem>
    ) {}

    create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
        const orderItem = this.orderItemRepository.create(createOrderItemDto);
        return this.orderItemRepository.save(orderItem);
    }

    findAll(): Promise<OrderItem[]> {
        return this.orderItemRepository.find();
    }

    findOne(id: number): Promise<OrderItem> {
        return this.orderItemRepository.findOne({where : { id }});
    }

    async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
        await this.orderItemRepository.update(id, updateOrderItemDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.orderItemRepository.delete(id)
    }
}