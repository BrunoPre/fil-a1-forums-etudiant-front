import { IPostFetched } from "@/types/IPostFetched";

export class PostFetched {
  public id: string;
  public groupId: string;
  public title: string;
  public content: string;
  public categoryId: string;
  public userName: string;
  public createdAt: string;

  constructor(postFetched: IPostFetched) {
    this.id = postFetched.id;
    this.groupId = postFetched.groupId;
    this.title = postFetched.title;
    this.content = postFetched.content;
    this.categoryId = postFetched.categoryId;
    this.userName = postFetched.userName;
    this.createdAt = postFetched.createdAt;
  }
}
