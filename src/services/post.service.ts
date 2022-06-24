import axios, { Axios, AxiosResponse } from "axios";
import { IPost } from "@/types/IPost";
import { IPostFetched } from "@/types/IPostFetched";
import { PostFetched } from "@/types/PostFetched";
import { Post } from "@/types/Post";
import { RouteParamValue } from "vue-router";

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

  postPost(post: IPost) {
    return axios
      .post("http://localhost:8080/api/posts", post)
      .then((res) => Promise.resolve(new PostFetched(res.data as IPostFetched)))
      .catch((err) => Promise.reject(err)); // 500 internal server error
  }

  deletePost(postId: string | RouteParamValue[]) {
    return axios.delete(API_URL + postId);
  }

  getQuestionsByCategoryId(
    groupId: string | RouteParamValue[],
    categoryId: string
  ) {
    return axios
      .get(API_URL + groupId, { params: { categoryId: categoryId } })
      .then((res) => res.data as IPostFetched[]);
  }
}

export default new PostService();
