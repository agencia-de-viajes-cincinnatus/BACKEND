import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from 'src/typeorm/entities/Employee';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      return this.employeeRepository.save({
        ...createEmployeeDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAllEmployee() {
    try {
      return this.employeeRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findEmployeeById(id: string) {
    try {
      return this.employeeRepository.findOneBy({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return this.employeeRepository.update(id, updateEmployeeDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      return this.employeeRepository.softDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
