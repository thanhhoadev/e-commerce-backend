import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageProductVariant } from "./imageproductvariant.entity";
import { ImageProductVariantController } from "./imageproductvariant.controller";
import { ImageProductVariantService } from "./imageproductvariant.service";

@Module({
    imports: [TypeOrmModule.forFeature([ImageProductVariant])],
    controllers: [ImageProductVariantController],
    providers: [ImageProductVariantService],
    exports: [ImageProductVariantService],
})
export class ImageProductVariantModule {}