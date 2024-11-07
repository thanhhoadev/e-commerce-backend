import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductVariant } from "./productvariant.entity";
import { ProductVariantController } from "./productvariant.controller";
import { ProductVariantService } from "./productvariant.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductVariant])],
    controllers: [ProductVariantController],
    providers: [ProductVariantService],
    exports: [ProductVariantService],
})
export class ProductVariantModule {}