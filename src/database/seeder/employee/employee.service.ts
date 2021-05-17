import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { SeedCreateService } from '@seeder/shared/seed-create/seed-create.service';

import { Employee } from '@employees/common/employee.entity';
import { EMPLOYEES } from './employee.data';


@Injectable()
export class EmployeeSeederService {

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private seedCreateService: SeedCreateService
  ) {}

  async create(): Promise<number> {
    return this.seedCreateService.create(EMPLOYEES, this.employeeRepository);
  }

}
