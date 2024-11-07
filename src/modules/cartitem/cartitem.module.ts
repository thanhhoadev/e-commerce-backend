import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartItem } from "./cartitem.entity";
import { CartItemController } from "./cartitem.controller";
import { CartItemService } from "./cartitem.service";

@Module({
    imports: [TypeOrmModule.forFeature([CartItem])],
    controllers: [CartItemController],
    providers: [CartItemService],
    exports: [CartItemService]
})
export class CartItemModule {}