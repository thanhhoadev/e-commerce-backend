import { PartialType } from "@nestjs/mapped-types";
import { CreateImageProductDto } from "./create-imageproduct.dto";

export class UpdateImageProductDto extends PartialType(CreateImageProductDto) {} ;