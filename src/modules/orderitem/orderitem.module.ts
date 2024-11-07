import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItem } from "./orderitem.entity";
import { OrderItemController } from "./orderitem.controller";
import { OrderItemService } from "./orderitem.service";

@Module({
    imports: [TypeOrmModule.forFeature([OrderItem])],
    controllers: [OrderItemController],
    providers: [OrderItemService],
    exports: [OrderItemService],
})
export class OrderItemModule {};