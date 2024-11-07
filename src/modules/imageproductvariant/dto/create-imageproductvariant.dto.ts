import { IsNotEmpty, IsString } from "class-validator";

export class CreateImageProductVariantDto {
  @IsNotEmpty()
  @IsString()
  url: string;
}
