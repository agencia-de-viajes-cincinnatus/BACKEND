import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';
import { Client } from './Client';

@Entity({ name: 'country' })
export class Country {
  @Column({ primary: true, unique: true, nullable: false, length: 3 })
  id: string;

  @Column({ nullable: false })
  country: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Client, (client) => client.country, {})
  clients: Client[];
}
