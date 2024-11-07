import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductVariant } from "./productvariant.entity";
import { Repository } from "typeorm";
import { CreateProductVariantDto } from "./dto/create-productvariant.dto";
import { UpdateProductVariantDto } from "./dto/update-review.dto";

@Injectable()
export class ProductVariantService {
    constructor(
        @InjectRepository(ProductVariant)
        private productVariantRepository: Repository<ProductVariant>,
    ) {}

    create(createProductVariantDto: CreateProductVariantDto): Promise<ProductVariant> {
        const productVariant = this.productVariantRepository.create(createProductVariantDto);
        return this.productVariantRepository.save(productVariant);
    }

    findAll(): Promise<ProductVariant[]> {
        return this.productVariantRepository.find();
    }

    findOne(id: number): Promise<ProductVariant> {
        return this.productVariantRepository.findOne({ where: { id }});
    }

    async update(id: number, updateProductVariantDto: UpdateProductVariantDto): Promise<ProductVariant> {
        await this.productVariantRepository.update(id, updateProductVariantDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.productVariantRepository.delete(id);
    }
}