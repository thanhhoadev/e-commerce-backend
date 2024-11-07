import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { FollowService } from "./follow.service";
import { Follow } from "./follow.entity";

@Controller('follows')
export class FollowController {
    constructor(
        private readonly followService: FollowService
    ) {}

    @Post()
    async create(@Body() follow: Follow) {
        return this.followService.create(follow);
    }

    @Get()
    async findAll() {
        return this.followService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.followService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() follow: Follow) {
        return this.followService.update(id, follow);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.followService.remove(id);
    }
}