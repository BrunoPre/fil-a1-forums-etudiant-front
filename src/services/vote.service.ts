import axios from "axios";
const API_URL = "http://localhost:8080/api/likes/reply";

class VoteService {
  async getVoteCounter(replyId: string): Promise<number> {
    return axios
      .get(API_URL + "/amount", { params: { contentId: replyId } })
      .then((response) => Promise.resolve(response.data as number))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async postLike(userId: string, replyId: string) {
    return axios.post(API_URL, {
      params: { userId: userId, contentId: replyId },
    });
    // TODO: return response
  }

  async postDislike(userId: string, replyId: string) {
    return axios.delete(API_URL, {
      params: { userId: userId, contentId: replyId },
    });
    // TODO: return response
  }
}

export default new VoteService();
