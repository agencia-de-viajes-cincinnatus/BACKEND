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
  country: string;

  @Column()
  identification: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  preferences: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Country, (country) => country.id)
  country_id: Country;
}
