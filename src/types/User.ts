import { IUser } from "@/types/IUser";

export class User implements IUser {
  constructor(public username = "", public password = "") {}
}
