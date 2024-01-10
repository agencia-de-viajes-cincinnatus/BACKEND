import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Supplier } from './Supplier';

@Entity({ name: 'service' })
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.service)
  supplier: Supplier;

  @Column()
  type: string;

  @Column({ default: false })
  date: Date;

  @Column()
  price: number;
}
