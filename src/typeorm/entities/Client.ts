import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './Country';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  identification: string;

  @Column()
  phone: string;

  @Column()
  preferences: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Country, (country) => country.id, {
    eager: true,
    cascade: true,
  })
  country: Country;
}
