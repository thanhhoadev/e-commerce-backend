import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePaymentDto {
    @IsNumber()
    @IsNotEmpty()
    paymentMethod: number;

    @IsDateString()
    @IsNotEmpty()
    paymentDate: Date;

    @IsNotEmpty()
    @IsNumber()
    paymentStatus: number;
}