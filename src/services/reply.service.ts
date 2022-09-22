import axios from "axios";
import { Reply } from "@/types/Reply";
import { IReply } from "@/types/IReply";

const API_URL = "http://localhost:8080/api/replies";

class ReplyService {
  async getAnswersByPostId(postId: string): Promise<Reply[]> {
    return axios
      .get(API_URL, { params: { postId: postId } })
      .then((response) => {
        const listReplies: Reply[] = [];
        response.data.forEach(function (reply: IReply) {
          listReplies.push(new Reply(reply));
        });
        return Promise.resolve(listReplies);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async getCommentsByReplyId(replyId: string): Promise<Reply[]> {
    return axios
      .get(API_URL + "/" + replyId + "/comments")
      .then((response) => {
        const listComments: Reply[] = [];
        response.data.forEach(function (reply: IReply) {
          listComments.push(new Reply(reply));
        });
        return Promise.resolve(listComments);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async postAnswer(
    postId: string,
    userName: string,
    payload: string
  ): Promise<string> {
    return axios
      .post(API_URL, {
        postId: postId,
        replyId: null,
        userName: userName,
        content: payload,
      })
      .then((res) => {
        return Promise.resolve(res.data.id); // TODO: get response
      });
  }

  async postCommentToAnswer(
    postId: string,
    replyId: string,
    userName: string,
    payload: string
  ) {
    return axios.post(API_URL, {
      postId: postId,
      replyId: replyId,
      userName: userName,
      content: payload,
    }); // TODO: get response
  }

  async deleteReply(replyId: string) {
    return axios.delete(API_URL + "/" + replyId); // TODO: get response
  }
}

export default new ReplyService();
