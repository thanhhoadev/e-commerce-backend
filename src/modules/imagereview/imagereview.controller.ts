import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ImagereviewService } from "./imagereview.service";
import { CreateImagereviewDto } from "./dto/create-imagereview.dto";
import { UpdateImagereviewDto } from "./dto/update-imagereview.dto";

@Controller('imagereview')
export class ImagereviewController {
  constructor(private readonly imagereviewService: ImagereviewService) {}

  @Post()
  async create(@Body() createImageReviewDto: CreateImagereviewDto) {
    return this.imagereviewService.create(createImageReviewDto);
  }

  @Get()
  async findAll() {
    return this.imagereviewService.findAll();
  }

  @Get(":id")
  async findOne(@Param('id') id: number) {
    return this.imagereviewService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateImageReviewDto: UpdateImagereviewDto ) {
    return this.imagereviewService.update(id, updateImageReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.imagereviewService.remove(id);
  }
}
