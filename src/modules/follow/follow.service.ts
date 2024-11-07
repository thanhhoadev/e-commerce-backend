import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Follow } from "./follow.entity";
import { Repository } from "typeorm";

@Injectable()
export class FollowService {
    constructor (
        @InjectRepository(Follow)
        private followRepository: Repository<Follow>,
    ) {}

    create (fl: Follow): Promise<Follow> {
        const follow = this.followRepository.create(fl);
        return this.followRepository.save(follow);
    }

    findAll(): Promise<Follow[]> {
        return this.followRepository.find();
    }

    findOne(id: number): Promise<Follow> {
        return this.followRepository.findOne({ where: { id } });
    }

    async update(id: number, follow: Follow): Promise<Follow> {
        await this.followRepository.update(id, follow);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.followRepository.delete(id)
    }
}