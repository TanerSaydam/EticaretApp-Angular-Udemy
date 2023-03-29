import { UserModel } from "./user.model";

export class LoginResponseModel{
    token: string = "";
    user: UserModel = new UserModel();
}