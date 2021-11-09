import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService],
})
export class PostModule {}
