import { IReply } from "@/types/IReply";

export class Reply {
  public id: string;
  public postId: string;
  public content: string;
  public user: string;
  public date: string;
  public voteCount: number;

  constructor(replyFetched: IReply) {
    this.id = replyFetched.id;
    this.content = replyFetched.content;
    this.postId = replyFetched.postId;
    this.user = replyFetched.userName;
    this.date = replyFetched.createdAt;
    this.voteCount = 0;
  }
}
