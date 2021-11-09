import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 120 })
  title: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column('varchar', { length: 120 })
  author: string;

  @Column('varchar', { length: 255, default: '' })
  categories?: string;
}
