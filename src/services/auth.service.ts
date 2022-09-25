import axios from "axios";
import { IUser } from "@/types/IUser";

const API_PORT = "8080";
const BASE_URL = "http://localhost:" + API_PORT + "/api/auth";
const LOGIN_ROUTE = "/login";
const REGISTER_ROUTE = "/register";

class AuthService {
  async login(user: any) {
    return axios
      .post(BASE_URL + LOGIN_ROUTE, null, {
        params: { username: user.username, password: user.password },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({ username: user.username, password: user.password })
          );
        }

        return { username: user.username, password: user.password };
      });
  }

  async register(user: IUser): Promise<number> {
    if (user.username === "" || user.password === "") {
      return Promise.reject("Username or password missing");
    }
    return axios
      .post(
        BASE_URL + REGISTER_ROUTE,
        {
          username: user.username,
          password: user.password,
        },
        {}
      )
      .then((res) => Promise.resolve(res.status))
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
