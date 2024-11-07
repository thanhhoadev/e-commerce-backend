import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderItemDto {
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}