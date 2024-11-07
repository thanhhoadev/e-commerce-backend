import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ImageProductService } from "./imageproduct.service";
import { CreateImageProductDto } from "./dto/create-imageproduct.dto";
import { UpdateImageProductDto } from "./dto/update-imageproduct.dto";

@Controller('ImageProduct')
export class ImageProductController {
    constructor(
        private readonly imgProdService: ImageProductService
    ) {}

    @Post()
    async create(@Body() createDto: CreateImageProductDto) {
        return this.imgProdService.create(createDto);
    }

    @Get()
    async findAll() {
        return this.imgProdService.findAll();
    }

    @Get(':id')
    async findOne(@Param("id") id: number) {
        return this.imgProdService.findOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() updateDto: UpdateImageProductDto) {
        return this.imgProdService.update(id, updateDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.imgProdService.delete(id)
    }
}