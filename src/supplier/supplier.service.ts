import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from 'src/typeorm/entities/Supplier';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}
  async create(createSupplierDto: CreateSupplierDto) {
    try {
      return await this.supplierRepository.save({
        ...createSupplierDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAllSupplier() {
    try {
      return await this.supplierRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findSupplierById(id: string) {
    try {
      return await this.supplierRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    try {
      return await this.supplierRepository.update(id, updateSupplierDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.supplierRepository.softDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
