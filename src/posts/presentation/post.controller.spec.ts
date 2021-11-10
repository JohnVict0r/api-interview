import { PostController } from './post.controller';
import { PostService } from '../application/post.service';
import { Post } from '../domain/post';
import { Repository } from 'typeorm';
import { PostEntity } from '../infrastructure/post.entity';

describe('PostController', () => {
  let postController: PostController;
  let postService: PostService;
  let postRepository: Repository<PostEntity>

  beforeEach(async () => {
    postService = new PostService(postRepository);
    postController = new PostController(postService);
  });

  it('should return list of all posts', () => {
    const post = new Post({ 
      "categories": "test",
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    });

    jest.spyOn(postService, 'findAll').mockImplementation(() => Promise.resolve([post]));

    expect(postController.listAll()).resolves.toEqual([post]);
  });
});
