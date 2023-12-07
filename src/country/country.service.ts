import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../typeorm/entities/Country';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async create(createCountryDto: CreateCountryDto) {
    try {
      const country = this.countryRepository.create(createCountryDto);
      return await this.countryRepository.save(country);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.countryRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.countryRepository.findOneBy({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    try {
      return await this.countryRepository.update(id, updateCountryDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.countryRepository.softDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
