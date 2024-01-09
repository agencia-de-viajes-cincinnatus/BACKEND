import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Service } from './Service';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  contract: string;

  @Column()
  type: string;

  @OneToMany(() => Service, (service) => service.supplier)
  service: Service[];

  @DeleteDateColumn()
  deletedAt: Date;
}
