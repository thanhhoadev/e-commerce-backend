import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller('categories')
export class CategoryController {
    constructor( private readonly cateService: CategoryService) {}

    @Post()
    async create(createDto: CreateCategoryDto) {
        return this.cateService.create(createDto)
    }

    @Get()
    async findAll() {
        return this.cateService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.cateService.findOne(id)
    } 

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateDto: UpdateCategoryDto) {
        return this.cateService.update(id, updateDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.cateService.delete(id)
    }
}