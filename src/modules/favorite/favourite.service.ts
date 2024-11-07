import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Favorite } from "./favourite.entity";
import { Repository } from "typeorm";

@Injectable()
export class FavouriteService {
    constructor (
        @InjectRepository(Favorite)
            private favouriteRepository: Repository<Favorite>,
    ) {}

    create(fv: Favorite): Promise<Favorite> {
        const favourite = this.favouriteRepository.create(fv);
        return this.favouriteRepository.save(favourite);
    }

    findAll(): Promise<Favorite[]> {
        return this.favouriteRepository.find();
    }

    findOne(id: number): Promise<Favorite> {
        return this.favouriteRepository.findOne({ where: { id } })
    }

    async update(id: number, fv: Favorite): Promise<Favorite> {
        await this.favouriteRepository.update(id, fv);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.favouriteRepository.delete(id);
    }
}