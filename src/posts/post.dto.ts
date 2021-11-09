import { IsString, Length } from 'class-validator';

export class PostDTO {
  @IsString()
  @Length(120)
  title: string;

  @IsString()
  @Length(255)
  description: string;

  @IsString()
  @Length(120)
  author: string;

  @IsString()
  @Length(255)
  categories?: string;
}
