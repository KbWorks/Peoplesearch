export interface IUserService {
    getUserTitle(userEmail: string): Promise<string>;
}