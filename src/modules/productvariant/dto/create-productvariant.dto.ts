import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductVariantDto {
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    priceSell: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}