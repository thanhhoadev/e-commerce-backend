import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Favorite } from "./favourite.entity";
import { FavouriteController } from "./favourite.controller";
import { FavouriteService } from "./favourite.service";

@Module({
    imports: [TypeOrmModule.forFeature([Favorite])],
    controllers: [FavouriteController],
    providers: [FavouriteService],
    exports: [FavouriteService],
})
export class FavouriteModule {}