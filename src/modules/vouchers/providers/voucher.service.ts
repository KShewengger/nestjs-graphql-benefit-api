import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Voucher } from '@vouchers/common/voucher.entity';


@Injectable()
export class VoucherService {

  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>
  ) {}

  async getAllVouchers(): Promise<Voucher[]> {
    return this.voucherRepository.find();
  }

}