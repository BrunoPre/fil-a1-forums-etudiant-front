import axios from "axios";
const API_URL = "http://localhost:8080/api/likes/reply";

class VoteService {
  getVoteCounter(replyId: string) {
    return axios
      .get(API_URL + "/amount", { params: { contentId: replyId } })
      .then((response) => Promise.resolve(response.data as number));
  }

  postLike(userId: string, replyId: string) {
    return axios.post(API_URL, {
      params: { userId: userId, contentId: replyId },
    });
    // TODO: return response
  }

  postDislike(userId: string, replyId: string) {
    return axios.delete(API_URL, {
      params: { userId: userId, contentId: replyId },
    });
    // TODO: return response
  }
}

export default new VoteService();
