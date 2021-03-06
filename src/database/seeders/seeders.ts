import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';

import { CompanySeederService } from '@seeders/companies/companies.service';
import { EmployeeSeederService } from '@seeders/employees/employees.service';
import { PartnerSeederService } from '@seeders/partners/partners.service';
import { VoucherSeederService } from '@seeders/vouchers/vouchers.service';
import { OrderSeederService } from '@seeders/orders/orders.service';


@Injectable()
export class Seeders {
  constructor(
    private logger: Logger,
    private companySeederService: CompanySeederService,
    private employeeSeederService: EmployeeSeederService,
    private partnerSeederService: PartnerSeederService,
    private voucherSeederService: VoucherSeederService,
    private orderSeederService: OrderSeederService
  ) {}

  async seed() {
    try {
      await this.seeder('companies', this.companySeederService);
      await this.seeder('employees', this.employeeSeederService);
      await this.seeder('partners', this.partnerSeederService)
      await this.seeder('vouchers', this.voucherSeederService);
      await this.seeder('orders', this.orderSeederService);
    } catch (err) {
      this.logger.error('Failed seeding...');
      throw new InternalServerErrorException(err);
    }

    this.logger.debug('Successfully completed seeding...');
  }

  async seeder(name: string, service: { create(): Promise<number> }): Promise<boolean> {
    return service.create()
      .then(data => {
        this.logger.debug(`No. of ${name} created: ${ data }`);
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }

}
