import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/typeorm/entities/Client';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    try {
      const client = this.clientRepository.create(createClientDto);
      return await this.clientRepository.save(client);
    } catch (error) {
      console.log(error);
    }
  }

  async findAllClients() {
    try {
      return await this.clientRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findClientById(id: string) {
    return this.clientRepository.findOneBy({ id });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: string) {
    return await this.clientRepository.softDelete(id);
  }
}
