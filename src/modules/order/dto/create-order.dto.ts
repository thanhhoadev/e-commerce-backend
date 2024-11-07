import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    shippingAddress: string;

    @IsString()
    @IsNotEmpty()
    recipientName: string;

    @IsString()
    @IsNotEmpty()
    recipientPhone: string;

    @IsNumber()
    @IsNotEmpty()
    total: number;

    @IsNumber()
    @IsNotEmpty()
    feeShip: number;

    @IsNumber()
    @IsNotEmpty()
    totalCOD: number;

    @IsDateString()
    @IsNotEmpty()
    shippingDate: Date;
}