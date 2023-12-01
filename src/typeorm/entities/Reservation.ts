import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // Temporary property (this is a FK)
  @Column()
  destination: string;

  @Column()
  date: Date;

  @Column()
  completed: boolean;

  // Temporary property (this is a FK)
  @Column()
  employee: string;
}
