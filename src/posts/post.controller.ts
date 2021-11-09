import {
  Body,
  Get,
} from '@nestjs/common';
import { Controller, Post as PostHttp } from '@nestjs/common';
import { Post } from './post';
import { PostDTO } from './post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(
    private service: PostService,
  ) {}

  @Get('/')
  public async listAll(): Promise<Post[]> {
    return await this.service.findAll();
  }

  @PostHttp('/')
  public create(@Body() body: PostDTO): Promise<Post> {
    return this.service.create(new Post(body));
  }
}
