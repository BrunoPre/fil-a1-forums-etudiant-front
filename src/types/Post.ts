import IQuestion from "@/types/IQuestion";

export class Post {
  public groupId: string;
  public title: string;
  public content: string;
  public categoryId: string;
  public userName: string;

  constructor(question: IQuestion) {
    this.groupId = "";
    this.title = question.title;
    this.content = question.description;
    this.categoryId = "";
    this.userName = question.user;
  }
}
