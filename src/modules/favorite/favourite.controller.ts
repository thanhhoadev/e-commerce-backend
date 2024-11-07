import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { FavouriteService } from "./favourite.service";
import { Favorite } from "./favourite.entity";

@Controller('Favourites')
export class FavouriteController {
    constructor(
        private readonly favouriteService: FavouriteService
    ) {}

    @Post()
    async create(@Body() fv: Favorite) {
        return this.favouriteService.create(fv);
    }

    @Get()
    async findAll() {
        return this.favouriteService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.favouriteService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, fv: Favorite) {
        return this.favouriteService.update(id, fv);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.favouriteService.remove(id);
    }
}