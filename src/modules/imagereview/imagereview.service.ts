import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImageReview } from "./imagereview.entity";
import { Repository } from "typeorm";
import { CreateImagereviewDto } from "./dto/create-imagereview.dto";
import { UpdateReviewDto } from "../review/dto/update-review.dto";
import { UpdateImagereviewDto } from "./dto/update-imagereview.dto";

@Injectable()
export class ImagereviewService {
  constructor(
    @InjectRepository(ImageReview)
    private imageReviewRepository: Repository<ImageReview>,
  ) {
  }

  create(createReviewDto: CreateImagereviewDto): Promise<CreateImagereviewDto> {
    const imgReview = this.imageReviewRepository.create(createReviewDto);
    return this.imageReviewRepository.save(imgReview);
  }

  findAll(): Promise<ImageReview[]> {
    return this.imageReviewRepository.find()
  }

  findOne(id: number): Promise<ImageReview> {
    return this.imageReviewRepository.findOne({where : { id }});
  }

  async update(id: number, updateImageReviewDto: UpdateImagereviewDto): Promise<ImageReview> {
    await this.imageReviewRepository.update(id, updateImageReviewDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.imageReviewRepository.delete(id);
  }
}
