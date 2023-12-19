import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/typeorm/entities/Client';
import { Repository } from 'typeorm';
import { Country } from 'src/typeorm/entities/Country';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,

    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    try {
      const country = await this.countryRepository.findOneBy({
        id: createClientDto.country,
      });
      if (!country) {
        throw new BadRequestException('Country not found');
      }
      return await this.clientRepository.save({
        ...createClientDto,
        country,
      });
      //const client = this.clientRepository.create(createClientDto);
      //return await this.clientRepository.save(client);
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
    try {
      const client = await this.clientRepository.findOneBy({ id });
      if (!client) {
        throw new BadRequestException('Client not found');
      }
      let country;
      if (updateClientDto.country) {
        country = await this.countryRepository.findOneBy({
          id: updateClientDto.country,
        });
        if (!country) {
          throw new BadRequestException('Country not found');
        }
      }
      return await this.clientRepository.save({
        ...client,
        ...updateClientDto,
        country,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.clientRepository.softDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
