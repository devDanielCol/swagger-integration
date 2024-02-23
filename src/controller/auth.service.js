import { UsersModel } from "../models/User.js";
import Controller from "../abs/controller.js";

class AuthService extends Controller {
  static Model = UsersModel;

  static GetUserData(userID) {
    const user = this.Model.filter((u) => {
      return userID === u.id;
    });

    if (user.length > 0) {
      return user;
    }

    throw Error("User not found");
  }

  static Loging({ username, password }) {
    const user = this.Model.filter((u) => {
      return username === u.username;
    })[0];

    if (user.password === password && user.username === username) {
      return user;
    } else throw Error("Unauthorized");
  }
}

export { AuthService };
