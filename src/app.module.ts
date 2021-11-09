import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './posts/post.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
