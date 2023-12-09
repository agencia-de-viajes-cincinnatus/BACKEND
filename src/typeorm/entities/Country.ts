import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'countries' })
export class Country {
  @Column({ primary: true, unique: true, nullable: false, length: 3 })
  id: string;

  @Column({ type: 'varchar', nullable: false })
  country: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
