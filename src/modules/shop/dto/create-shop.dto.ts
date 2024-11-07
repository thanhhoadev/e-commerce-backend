import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateShopDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    avatar: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    typeBusiness: number;

    @IsString()
    @IsNotEmpty()
    taxCode: string;

    @IsString()
    @IsNotEmpty()
    businessRegistrationCetificate: string;

    @IsString()
    @IsNotEmpty()
    ownerCCCDNumber: string;

    @IsString()
    @IsNotEmpty()
    ownerCCCDImgFront: string;

    @IsString()
    @IsNotEmpty()
    ownerCCCDImgBack: string;
}