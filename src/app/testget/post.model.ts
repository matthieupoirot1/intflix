export class Post{
  id?: number;
  userId?: number;
  title?: string;
  body?: string;

  constructor(id: number, title: string, userId: number, body: string) {
    this.id = id;
    this.userId = userId;
    this.body = body;
    this.title = title;

  }
}
