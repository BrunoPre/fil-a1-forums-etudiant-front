import store from "@/store";

//const API_URL = "http://localhost:8080/api/posts/";

class UserService {
  getCurrentUser(): string {
    return store.state.user.username || "";
  }
}

export default new UserService();
