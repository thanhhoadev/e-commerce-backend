import { PartialType } from "@nestjs/mapped-types";
import { CreateImageProductVariantDto } from "./create-imageproductvariant.dto";

export class UpdateImageProductVariantDTO extends PartialType(CreateImageProductVariantDto){}
