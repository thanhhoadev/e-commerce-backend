import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { CreateShopDto } from "./dto/create-shop.dto";
import { UpdateShopDto } from "./dto/update-shop.dto";

@Controller('shops')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Post()
    async create(@Body() createShopDto: CreateShopDto) {
        return this.shopService.create(createShopDto);
    }

    @Get()
    async findAll() {
        return this.shopService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.shopService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateShopDto: UpdateShopDto) {
        return this.shopService.update(id, updateShopDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.shopService.remove(id);
    }
}