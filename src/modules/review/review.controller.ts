import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";

@Controller('reviews')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Post()
    async create(@Body() createReviewDto: CreateReviewDto) {
        return this.reviewService.create(createReviewDto);
    }

    @Get()
    async findAll() {
        return this.reviewService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.reviewService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto) {
        return this.reviewService.update(id, updateReviewDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.reviewService.remove(id);
    }
}