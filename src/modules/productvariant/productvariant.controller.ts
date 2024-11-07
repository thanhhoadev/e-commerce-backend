import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductVariantService } from "./productvariant.service";
import { CreateProductVariantDto } from "./dto/create-productvariant.dto";
import { UpdateProductVariantDto } from "./dto/update-review.dto";

@Controller('productvariants')
export class ProductVariantController {
    constructor(private readonly productVariantService: ProductVariantService) {}

    @Post()
    async create(@Body() createProductVariantDto: CreateProductVariantDto) {
        return this.productVariantService.create(createProductVariantDto);
    }

    @Get()
    async findAll() {
        return this.productVariantService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.productVariantService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateProductVariantDto: UpdateProductVariantDto) {
        return this.productVariantService.update(id, updateProductVariantDto);
    }

    @Delete('id')
    async delete(@Param('id') id: number) {
        return this.productVariantService.remove(id);
    }
}