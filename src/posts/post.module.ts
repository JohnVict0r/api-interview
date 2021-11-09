import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './presentation/post.controller';
import { PostEntity } from './infrastructure/post.entity';
import { PostService } from './application/post.service';

@Module({
  controllers: [PostController],
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService],
})
export class PostModule {}
