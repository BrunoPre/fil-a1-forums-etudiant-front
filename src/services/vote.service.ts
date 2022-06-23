import axios from "axios";
const API_URL = "http://localhost:8080/api/likes/reply";

class VoteService {
  getVoteCounter(replyId: string) {
    return axios
      .get(API_URL + "/amount", { params: { contentId: replyId } })
      .then((response) => Promise.resolve(response.data as number));
  }
}

export default new VoteService();
