import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Shop } from "./shop.entity";
import { Repository } from "typeorm";
import { CreateShopDto } from "./dto/create-shop.dto";
import { UpdateShopDto } from "./dto/update-shop.dto";

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Shop)
        private shopRepository: Repository<Shop>,
    ) {}

    create(createShopDto: CreateShopDto): Promise<Shop> {
        const shop = this.shopRepository.create(createShopDto);
        return this.shopRepository.save(shop);
    }

    findAll(): Promise<Shop[]> {
        return this.shopRepository.find();
    }

    findOne(id: number): Promise<Shop> {
        return this.shopRepository.findOne({ where: { id } });
    }

    async update(id: number, updateShopDto: UpdateShopDto): Promise<Shop> {
        await this.shopRepository.update(id, updateShopDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.shopRepository.delete(id);
    }
}