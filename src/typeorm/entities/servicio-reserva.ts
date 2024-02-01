import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reservation } from './Reservation';
import { Service } from './Service';

@Entity({ name: 'service-reservation' })
export class service_reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  date: string;
  @ManyToOne(() => Reservation, (reservation) => reservation.id)
  reservation: Reservation;

  @OneToMany(() => Service, (service) => service.id)
  service: Service;
}
