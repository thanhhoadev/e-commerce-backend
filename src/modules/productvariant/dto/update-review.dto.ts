import { PartialType } from "@nestjs/mapped-types";
import { CreateProductVariantDto } from "./create-productvariant.dto";

export class UpdateProductVariantDto extends PartialType(CreateProductVariantDto) {}