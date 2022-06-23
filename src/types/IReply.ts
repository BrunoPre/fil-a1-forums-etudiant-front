export interface IReply {
  id: string;
  postId: string;
  content: string;
  user: string;
  date: string;
  voteCount: bigint;
}
