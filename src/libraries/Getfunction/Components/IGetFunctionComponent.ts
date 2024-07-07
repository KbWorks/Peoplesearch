import { IUserService } from "../../Services/IUserService";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from "../../Services/UserService";
export interface IGetFunctionComponentProps {
 
  mystringparam?: string;
  userService: IUserService;

}