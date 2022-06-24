import axios from "axios";
import { IPost } from "@/types/IPost";
import { IPostFetched } from "@/types/IPostFetched";
import { PostFetched } from "@/types/PostFetched";

const API_URL = "http://localhost:8080/api/posts/";

class PostService {
  getPostByPostId(postId: string) {
    return axios
      .get(API_URL + postId)
      .then((response) =>
        Promise.resolve(new PostFetched(response.data as IPostFetched))
      );
  }

  getPostByGrpId(groupId: bigint) {
    return axios
      .get(API_URL, { params: { groupId: groupId } })
      .then((response) => {
        return Promise.resolve(new PostFetched(response.data as IPostFetched));
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  getPostByUserId(userId: string) {
    return axios
      .get(API_URL + userId)
      .then((response) => {
        return Promise.resolve(new PostFetched(response.data as IPostFetched));
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  postPost(userId: string, post: IPost) {
    return axios
      .post(API_URL, post, { params: { userId: userId } })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err)); // 500 internal server error
  }

  deletePost(postId: bigint) {
    return axios.delete(API_URL + postId);
  }
}

export default new PostService();
