interface PostParams {
  id?: number;
  title: string;
  description: string;
  author: string;
  categories?: string;
}

export class Post {
  public id?: number;
  public title: string;
  public description: string;
  public author: string;
  public categories?: string[] = [];

  constructor({ id, title, description, author, categories }: PostParams) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.categories = categories
      ?.split(',')
      .map((category) => (category));
  }
}
