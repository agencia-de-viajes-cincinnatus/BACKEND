import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'user' })
  rol: string;

  @Column({ nullable: true })
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
