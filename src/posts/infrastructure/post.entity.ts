import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ example: 1, description: 'The number id of the Post' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Software developer career", description: 'The title of the Post' })
  @Column('varchar', { length: 120 })
  title: string;

  @ApiProperty({ example: "The software developer career is incredible", description: 'The description of the Post' })
  @Column('varchar', { length: 255 })
  description: string;

  @ApiProperty({ example: "John Alves", description: 'The author of the Post' })
  @Column('varchar', { length: 120 })
  author: string;

  @ApiProperty({ example: ["tech", "career"], description: 'The categories of the Post' })
  @Column('varchar', { length: 255, default: '' })
  categories?: string;
}
