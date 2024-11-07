import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImageProduct } from "./imageproduct.entity";
import { Repository } from "typeorm";
import { CreateImageProductDto } from "./dto/create-imageproduct.dto";
import { UpdateImageProductDto } from "./dto/update-imageproduct.dto";

@Injectable()
export class ImageProductService {
    constructor (
        @InjectRepository(ImageProduct)
        private imgProdRepo: Repository<ImageProduct>
    ) {}

    create(createDto : CreateImageProductDto): Promise<ImageProduct> {
        const img = this.imgProdRepo.create(createDto);
        return this.imgProdRepo.save(img);
    }

    findAll(): Promise<ImageProduct[]> {
        return this.imgProdRepo.find();
    }

    findOne(id: number): Promise<ImageProduct> {
        return this.imgProdRepo.findOne({where: {id}})
    }

    async update(id: number, updateDto: UpdateImageProductDto): Promise<ImageProduct> {
        await this.imgProdRepo.update(id, updateDto);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.imgProdRepo.delete(id)
    }
}