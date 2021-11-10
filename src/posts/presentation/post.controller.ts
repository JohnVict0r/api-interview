import {
  Controller, 
  Param, 
  Body,
  Get,
  Post as PostHttp,
  Put, 
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Post } from '../domain/post';
import { PostDTO } from '../application/post.dto';
import { PostService } from '../application/post.service';
import { PostEntity } from '../infrastructure/post.entity';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(
    private service: PostService,
  ) {}

  @Get('/')
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ 
    status: 200,
    description: 'The found record',
    type: [PostEntity],
  })
  public async listAll(): Promise<Post[]> {
    return await this.service.findAll();
  }

  @PostHttp('/')
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  public async create(@Body() body: PostDTO): Promise<Post> {
    return this.service.create(new Post(body));
  }

  @Get('/:postId')
  @ApiOperation({ summary: 'Show post with :postId' })
  @ApiResponse({ status: 404, description: 'Post with id :postId not exists.' })
  @ApiResponse({ 
    status: 200,
    description: 'The found record',
    type: PostEntity,
  })
  public async show(
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<Post> {
    const post = await this.service.findOneById(postId);

    if (!post) {
      throw new NotFoundException(null, `Post with id ${postId} not exists`);
    }

    return post
  }

  @Put('/:postId')
  @ApiOperation({ summary: 'Update post' })
  @ApiResponse({ status: 404, description: 'Post with id :postId not exists.' })
  @ApiResponse({ 
    status: 200,
    description: 'The update record',
    type: [PostEntity],
  })
  public async update(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() body: PostDTO,
  ): Promise<Post> {
    const post = await this.service.findOneById(postId);

    if (!post) {
      throw new NotFoundException(null, `Post with id ${postId} not exists`);
    }

    return this.service.update(new Post({ id: postId, ...body }));
  }

  @Delete('/:postId')
  @ApiOperation({ summary: 'Delete post' })
  @ApiResponse({ status: 404, description: 'Post with id :postId not exists.' })
  public async delete(
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<DeleteResult> {
    const post = await this.service.findOneById(postId);

    if (!post) {
      throw new NotFoundException(null, `Post with id ${postId} not exists`);
    }

    return this.service.remove(postId);
  }
}
