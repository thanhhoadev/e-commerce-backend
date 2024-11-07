import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImageProductVariant } from "./imageproductvariant.entity";
import { Repository } from "typeorm";
import { CreateImageProductVariantDto } from "./dto/create-imageproductvariant.dto";
import { UpdateImageProductVariantDTO } from "./dto/update-imageproductvariant.dto";

@Injectable()
export class ImageProductVariantService {
  constructor(
    @InjectRepository(ImageProductVariant)
    private imageProductVariantRepository: Repository<ImageProductVariant>,
  ) {}

  create(createImageProductVariantDto: CreateImageProductVariantDto): Promise<ImageProductVariant> {
    const imgProdVariant = this.imageProductVariantRepository.create(createImageProductVariantDto)
    return this.imageProductVariantRepository.save(imgProdVariant)
  }

  findAll(): Promise<ImageProductVariant[]> {
    return this.imageProductVariantRepository.find();
  }

  findOne(id: number): Promise<ImageProductVariant> {
    return this.imageProductVariantRepository.findOne({where: {id}});
  }

  async update(id: number, updateImgProdVariantDto: UpdateImageProductVariantDTO): Promise<ImageProductVariant> {
    await this.imageProductVariantRepository.update(id, updateImgProdVariantDto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.imageProductVariantRepository.delete(id);
  }
}
