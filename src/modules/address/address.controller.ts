import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";

@Controller('addresses')
export class AddressController {
    constructor(private readonly addressService: AddressService) {}

    @Post()
    async create(@Body() createAdressDto: CreateAddressDto) {
        return this.addressService.create(createAdressDto);
    }

    @Get()
    async findAll() {
        return this.addressService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.addressService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateAddressDto: UpdateAddressDto){
        return this.addressService.update(id, updateAddressDto);
    }

    @Delete(':id')
    async remove(@Param('id') id:  number) {
        return this.addressService.remove(id);
    }
}