import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedCreateSharedModule } from '@seeder/shared/seed-create/seed-create.module';

import { Voucher } from '@vouchers/common/voucher.entity';
import { VoucherSeederService } from './voucher.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Voucher ]),
    SeedCreateSharedModule
  ],
  providers: [ VoucherSeederService ],
  exports: [ VoucherSeederService ],
})
export class VoucherSeederModule {}
