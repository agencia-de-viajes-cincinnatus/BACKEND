import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Destination } from './Destination';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Destination, (destination) => destination.reservations)
  destination: Destination;

  @Column()
  date: Date;

  @Column({ default: false })
  completed: boolean;

  // Temporary property (this is a FK)
  @Column()
  employee: string;
}
