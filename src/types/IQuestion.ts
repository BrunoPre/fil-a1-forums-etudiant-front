export interface IQuestion {
  title: string;
  description: string;
  user: string;
  date: string;
  voteCount: bigint;
  bestAnswer: {
    content: string;
    user: string;
    date: string;
    voteCount: number;
  };
  //categories: Array<any>;
}
