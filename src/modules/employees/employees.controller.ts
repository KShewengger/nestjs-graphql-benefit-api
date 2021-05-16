import { Controller, Get, ValidationPipe, Query, Param, ParseIntPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { EmployeeService } from '@employees/providers/employee.service';
import { Employee } from '@employees/common/employee.entity';
import { GetEmployeesExpendituresFilterDto } from '@employees/common/employee.dto';
import { EmployeeExpenditureResponse } from '@employees/common/employee.model';


@Controller('employees')
export class EmployeesController {

  private logger = new Logger('CompaniesController');

  constructor(private employeeService: EmployeeService) {}

  @Get()
  async getAllCompanies(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Get('/:id/employees')
  async getEmployeesExpenditures(
    @Param('id', ParseIntPipe) id: number,
    @Query(ValidationPipe) filterDto: GetEmployeesExpendituresFilterDto
  ): Promise<EmployeeExpenditureResponse[]> {
    return this.employeeService.getEmployeesExpenditures(id, filterDto);
  }

}