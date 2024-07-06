/* eslint-disable @microsoft/spfx/pair-react-dom-render-unmount */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { BaseWebComponent } from "@pnp/modern-search-extensibility";
import * as ReactDOM from "react-dom";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SPFI, spfi, SPFx } from "@pnp/sp";
import { PageContext } from "@microsoft/sp-page-context";
//import { DataService, IDataService } from "../../Services";

import { IWeb, Web } from "@pnp/sp/webs";
import { Caching } from "@pnp/queryable";
import { IUserService } from "../../Services/IUserService";
import { UserService } from "../../Services/UserService";
import {IGetFunctionComponentState} from "./GetFunctionComponentState";
import {IGetFunctionComponentProps} from "./IGetFunctionComponent";
export interface IObjectParam {
  myProperty: string;
}
export class GetFunctionComponent extends React.Component<
  IGetFunctionComponentProps,
  IGetFunctionComponentState
> {
  constructor(props: IGetFunctionComponentProps) {
    super(props);
    this.state = {
      userTitle: "",
    };
  }

  async componentDidMount(): Promise<void> {
    console.log(this.props.mystringparam);
    const data = await this.props.userService.getUserTitle(
      this.props.mystringparam
    );
    console.log(data);
    this.setState({ userTitle: data });
  }

  public render() {
    return <div id="userJobTitle" className="userJobTitle">{this.state.userTitle}</div>;
  }
}

export class MyGetFunctionComponentWebComponent extends BaseWebComponent {
  private _userService: IUserService;
  public constructor() {
    super();
    this._userService = new UserService(this._serviceScope);
  }

 // private _dataService: IDataService;
 // private _sp: SPFI;

  public async connectedCallback() {
    const props = this.resolveAttributes();
    console.log(props);
    const customComponent = (
      <GetFunctionComponent {...props} userService={this._userService} />
    );
    ReactDOM.render(customComponent, this);
  }
}
