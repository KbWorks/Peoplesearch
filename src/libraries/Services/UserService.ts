import { IUserService } from "./IUserService";
import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { PageContext } from "@microsoft/sp-page-context";

export class UserService implements IUserService {
  public static readonly serviceKey: ServiceKey<UserService> =
    ServiceKey.create<UserService>("SPFx:UserService", UserService);

  private _spHttpClient: SPHttpClient;
  private _pageContext: PageContext;
  private _currentWebUrl: string;

  constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
      this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);

      this._pageContext = serviceScope.consume(PageContext.serviceKey);
      this._currentWebUrl = this._pageContext.web.absoluteUrl;
    });
  }

  public async getUserTitle(userEmail: string): Promise<string> {
    let userJobTitle: string = "";
    try {
      const usersresponse: SPHttpClientResponse = await this._spHttpClient.get(
        `${this._currentWebUrl}/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='i:0%23.f|membership|${userEmail}'`,
        SPHttpClient.configurations.v1
      );
      if (usersresponse.ok) {
        const profileData = await usersresponse.json();
        userJobTitle = profileData.Title;
      }
    } catch (error) {
      console.log(error);
    }
    return userJobTitle;
  }
}
