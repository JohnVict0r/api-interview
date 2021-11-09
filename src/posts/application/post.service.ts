import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Post } from '../domain/post';
import { PostEntity } from '../infrastructure/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity) private repository: Repository<PostEntity>,
  ) {}

  public async create(newPost: Post): Promise<Post> {
    return new Post(
      await this.repository.save({
        ...newPost,
        categories: Array.isArray(newPost.categories)
          ? newPost.categories.join(',')
          : '',
      }),
    );
  }

  public async findAll(): Promise<Post[]> {
    const posts = await this.repository.find();
    return posts.map((post) => new Post(post));
  }

  public async findOneById(id: number): Promise<Post | null> {
    const post = await this.repository.findOne({ id });

    if (!post) {
      return null;
    }

    return new Post(post);
  }

  public async update(newPost: Post): Promise<Post> {
    return new Post(
      await this.repository.save({
        ...newPost,
        categories: Array.isArray(newPost.categories)
          ? newPost.categories.join(',')
          : '',
      }),
    );
  }

  public async remove(postId: number): Promise<DeleteResult> {
    return this.repository.delete(postId)
  }
}
