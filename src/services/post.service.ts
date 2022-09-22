import axios, { Axios, AxiosResponse } from "axios";
import { IPost } from "@/types/IPost";
import { IPostFetched } from "@/types/IPostFetched";
import { PostFetched } from "@/types/PostFetched";
import { Post } from "@/types/Post";
import { RouteParamValue } from "vue-router";

const API_URL = "http://localhost:8080/api/posts/";

class PostService {
  async getPostByPostId(postId: string): Promise<PostFetched> {
    return axios
      .get(API_URL + postId)
      .then((response) =>
        Promise.resolve(new PostFetched(response.data as IPostFetched))
      )
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async getPostByGrpId(groupId: bigint): Promise<PostFetched> {
    return axios
      .get(API_URL, { params: { groupId: groupId } })
      .then((response) => {
        return Promise.resolve(new PostFetched(response.data as IPostFetched));
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async getPostByUserId(userId: string): Promise<PostFetched> {
    return axios
      .get(API_URL + userId)
      .then((response) => {
        return Promise.resolve(new PostFetched(response.data as IPostFetched));
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async postPost(post: IPost): Promise<PostFetched> {
    return axios
      .post("http://localhost:8080/api/posts", post)
      .then((res) => Promise.resolve(new PostFetched(res.data as IPostFetched)))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  async deletePost(postId: string | RouteParamValue[]) {
    return axios.delete(API_URL + postId);
  }

  async getQuestionsByCategoryId(
    groupId: string | RouteParamValue[],
    categoryId: string
  ) {
    return axios
      .get(API_URL + groupId, { params: { categoryId: categoryId } })
      .then((res) => Promise.resolve(res.data as IPostFetched[]))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }
}

export default new PostService();
