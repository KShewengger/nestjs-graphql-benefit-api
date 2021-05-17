import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';

import { VoucherType } from '@vouchers/common/voucher.type';
import { VoucherService } from '@shared/voucher/voucher.service';
import { PartnerService } from '@shared/partner/partner.service';

import { Voucher } from '@vouchers/common/voucher.entity';
import { Partner } from '@partners/common/partner.entity';


@Resolver(() => VoucherType)
export class VoucherResolver {

  constructor(
    private voucherService: VoucherService,
    private partnerService: PartnerService
  ) {}

  @Query(() => [ VoucherType ])
  async vouchers() {
    return this.voucherService.getAllVouchers();
  }

  @ResolveField(() => Partner)
  async partner(@Parent() voucher: Voucher) {
    return this.partnerService.getPartner(voucher.partnerId);
  }

}

