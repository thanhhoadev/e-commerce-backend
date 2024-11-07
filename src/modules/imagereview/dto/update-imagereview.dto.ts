import { PartialType } from "@nestjs/mapped-types";
import { CreateImagereviewDto } from "./create-imagereview.dto";

export class UpdateImagereviewDto extends PartialType(CreateImagereviewDto) {}
