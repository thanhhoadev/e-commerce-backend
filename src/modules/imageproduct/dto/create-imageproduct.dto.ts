import { IsNotEmpty, IsString } from "class-validator";

export class CreateImageProductDto {
    @IsNotEmpty()
    @IsString()
    url : string;
}