import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reservation } from './Reservation';

@Entity({ name: 'destinations' })
export class Destination {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @OneToMany(() => Reservation, (reservation) => reservation.destination)
  reservations: Reservation[];

  @Column()
  score: number;

  @Column({ nullable: true })
  image: string;
}
