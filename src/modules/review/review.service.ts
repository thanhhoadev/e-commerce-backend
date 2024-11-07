import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { Repository } from "typeorm";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
    ) {}

    create(createReviewDto: CreateReviewDto): Promise<Review> {
        const review = this.reviewRepository.create(createReviewDto)
        return this.reviewRepository.save(review);
    }

    findAll(): Promise<Review[]> {
        return this.reviewRepository.find();
    }

    findOne(id: number): Promise<Review> {
        return this.reviewRepository.findOne({ where: { id } });
    }

    async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
        await this.reviewRepository.update(id, updateReviewDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.reviewRepository.delete(id);
    }
}