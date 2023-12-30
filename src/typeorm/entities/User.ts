import { IsEmail, IsString, MaxLength } from 'class-validator';
import { DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  rol: string;

  @IsString()
  @MaxLength(8)
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
