import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService {
    constructor (
        @InjectRepository(Category)
        private cateRepo : Repository<Category>
    ) {}

    create(createDto: CreateCategoryDto): Promise<Category> {
        const cate = this.cateRepo.create(createDto)
        return this.cateRepo.save(cate)
    }

    findAll() : Promise<Category[]> {
        return this.cateRepo.find()
    }

    findOne(id: number) : Promise<Category> {
        return this.cateRepo.findOne({where: {id}})
    }

    async update(id: number, updateDto: UpdateCategoryDto): Promise<Category> {
        await this.cateRepo.update(id, updateDto)
        return this.findOne(id)
    }

    async delete(id: number): Promise<void> {
        await this.cateRepo.delete(id)
    }
}