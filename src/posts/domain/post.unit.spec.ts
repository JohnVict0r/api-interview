import { Post } from '../domain/post';

describe('Post', () => {
  it('should return Post object', () => {
    const post = new Post({ 
      "categories": "test",
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    });

    const expected = {
      "categories": ["test"],
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    }

    expect(post).toEqual(expected);
  });

  it('should return categories empty', () => {
    const post = new Post({ 
      "categories": "",
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    });

    const expected = {
      "categories": [],
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    }

    expect(post).toEqual(expected);
  });

  it('should return categories with length equal 1', () => {
    const post = new Post({ 
      "categories": "test,",
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    });

    const expected = {
      "categories": ["test"],
      "id": 1,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    }

    expect(post).toEqual(expected);
  });

  it('should return when only required params', () => {
    const post = new Post({ 
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    });

    const expected = {
      "categories": undefined,
      "id": undefined,
      "title": "Post Test",
      "description": "Description of post",
      "author": "John"
    }

    expect(post).toEqual(expected);
  });
});
