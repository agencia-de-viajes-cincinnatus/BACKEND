import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // Temporary property (this is a FK)
  @Column()
  destination: string;

  @Column()
  date: Date;

  @Column({ default: false })
  completed: boolean;

  // Temporary property (this is a FK)
  @Column()
  employee: string;
}
