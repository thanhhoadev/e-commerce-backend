import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService ) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto);
    }

    @Get()
    async findAll() {
        return this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.productService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.productService.remove(id)
    }
}