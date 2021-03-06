import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { VoucherService } from '@shared/voucher/voucher.service';
import { Voucher } from '@vouchers/models/voucher.entity';


@Controller('vouchers')
export class VouchersController {

  private logger = new Logger('VouchersController');

  constructor(private voucherService: VoucherService) {}

  @Get()
  async getAllVouchers(): Promise<Voucher[]> {
    return this.voucherService.getAllVouchers();
  }

}
