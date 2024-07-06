import { IUserService } from "../../Services/IUserService";
import { UserService } from "../../Services/UserService";
export interface IGetFunctionComponentProps {
 
  mystringparam?: string;
  userService: IUserService;

}