import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ImageProductVariantService } from "./imageproductvariant.service";
import { CreateImageProductVariantDto } from "./dto/create-imageproductvariant.dto";
import { UpdateImageProductVariantDTO } from "./dto/update-imageproductvariant.dto";

@Controller('ImageProductVariant')
export class ImageProductVariantController {
    constructor(
        private readonly imgProdVariantService : ImageProductVariantService
    ) {}

    @Post()
    async create(@Body() createImgProdVariantDto: CreateImageProductVariantDto) {
        return this.imgProdVariantService.create(createImgProdVariantDto);
    }

    @Get()
    async findAll() {
        return this.imgProdVariantService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: number) {
        return this.imgProdVariantService.findOne(id);
    }

    @Patch(":id")
    async update(@Param("id") id: number, @Body() updateDto: UpdateImageProductVariantDTO) {
        return this.imgProdVariantService.update(id, updateDto)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.imgProdVariantService.delete(id);
    }
}