import axios from "axios";
import { Reply } from "@/types/Reply";
import { IReply } from "@/types/IReply";

const API_URL = "http://localhost:8080/api/replies";

class ReplyService {
  getAnswersByPostId(postId: string) {
    return axios
      .get(API_URL, { params: { postId: postId } })
      .then((response) => {
        const listReplies: Reply[] = [];
        response.data.forEach(function (reply: IReply) {
          listReplies.push(new Reply(reply));
        });
        return Promise.resolve(listReplies);
      });
  }

  getCommentsByReplyId(replyId: string) {
    return axios.get(API_URL + "/" + replyId + "/comments").then((response) => {
      const listComments: Reply[] = [];
      response.data.forEach(function (reply: IReply) {
        listComments.push(new Reply(reply));
      });
      return Promise.resolve(listComments);
    });
  }

  postAnswer(postId: string, userName: string, payload: string) {
    return axios.post(API_URL, {
      postId: postId,
      replyId: null,
      userName: userName,
      content: payload,
    }); // TODO: get response
  }
}

export default new ReplyService();
