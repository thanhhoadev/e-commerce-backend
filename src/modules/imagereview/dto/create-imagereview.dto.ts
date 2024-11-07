import { IsNotEmpty, IsString } from "class-validator";

export class CreateImagereviewDto {
  @IsNotEmpty()
  @IsString()
  url: string;
}
