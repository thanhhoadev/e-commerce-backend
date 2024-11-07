import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";

@Controller('Payments')
export class PaymentController {
    constructor( private readonly paymentService: PaymentService) {}

    @Post()
    async create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentService.create(createPaymentDto);
    }

    @Get()
    async findAll() {
        return this.paymentService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return this.paymentService.findOne(id);
    }

    @Patch(":id")
    async update(@Param("id") id: number, @Body() updatePaymentDto: UpdatePaymentDto){
        return this.paymentService.update(id, updatePaymentDto);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.paymentService.remove(id)
    }
}