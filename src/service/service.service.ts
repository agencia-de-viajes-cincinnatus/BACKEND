import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from 'src/typeorm/entities/Service';
import { Supplier } from 'src/typeorm/entities/Supplier';
import { CreateServiceParams, UpdateServiceParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  findService() {
    return this.serviceRepository.find({ relations: ['supplier'] });
  }

  findServiceById(id: string) {
    return this.serviceRepository.findOne({
      where: { id },
      relations: ['supplier'],
    });
  }

  async createService(supplierId: string, serviceDetails: CreateServiceParams) {
    const supplier = await this.supplierRepository.findOneBy({
      id: supplierId,
    });

    if (!supplier)
      throw new HttpException(
        'Supplier not found. Cannot create Service',
        HttpStatus.BAD_REQUEST,
      );

    const newService = this.serviceRepository.create({
      ...serviceDetails,
      date: new Date(serviceDetails.date).toISOString().split('T')[0],
      supplier,
    });

    return this.serviceRepository.save(newService);
  }

  async updateService(id: string, updateServiceDetails: UpdateServiceParams) {
    const supplier = await this.supplierRepository.findOneBy({
      id: updateServiceDetails?.supplier,
    });

    if (!supplier)
      throw new HttpException(
        'Supplier not found. Cannot update supplier',
        HttpStatus.BAD_REQUEST,
      );

    return this.serviceRepository.update(
      { id },
      { ...updateServiceDetails, supplier },
    );
  }

  deleteService(id: string) {
    return this.serviceRepository.delete(id);
  }
}
