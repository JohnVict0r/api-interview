import { IsOptional, IsString, Length } from 'class-validator';

export class PostDTO {
  @IsString()
  @Length(5)
  title: string;

  @IsString()
  @Length(2)
  description: string;

  @IsString()
  @Length(2)
  author: string;

  @IsOptional()
  @IsString()
  categories?: string;
}
