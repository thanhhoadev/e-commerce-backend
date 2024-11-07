import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageReview } from "./imagereview.entity";
import { ImagereviewController } from "./imagereview.controller";
import { ImagereviewService } from "./imagereview.service";

@Module({
  imports: [TypeOrmModule.forFeature([ImageReview])],
  controllers: [ImagereviewController],
  providers: [ImagereviewService],
  exports: [ImagereviewService],
})
export class ImagereviewModule {}
