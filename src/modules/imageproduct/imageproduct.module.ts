import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageProduct } from "./imageproduct.entity";
import { ImageProductController } from "./imageproduct.controller";
import { ImageProductService } from "./imageproduct.service";

@Module({
    imports: [TypeOrmModule.forFeature([ImageProduct])],
    controllers: [ImageProductController],
    providers: [ImageProductService],
    exports: [ImageProductService],
})
export class ImageProductModule {}