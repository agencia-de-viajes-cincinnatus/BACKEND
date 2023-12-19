import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'employee' })
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  identification: string;

  @Column()
  phone: string;

  @Column()
  rol: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
