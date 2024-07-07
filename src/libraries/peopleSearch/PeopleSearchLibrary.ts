/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAdaptiveCardAction, IComponentDefinition, IExtensibilityLibrary, ILayoutDefinition, ISuggestionProviderDefinition } from '@pnp/modern-search-extensibility';
import { ServiceKey, ServiceScope } from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { PageContext } from '@microsoft/sp-page-context';
import * as Handlebars from "handlebars";
import { MyGetFunctionComponentWebComponent } from '../Getfunction/Components/GetFunctionComponent';
//import { getSP } from '../Services/PnPjsconfig';
export class PeopleSearchLibrary implements IExtensibilityLibrary {

  public static readonly serviceKey: ServiceKey<PeopleSearchLibrary> =
    ServiceKey.create<PeopleSearchLibrary>('SPFx:PeopleSearchLibrary', PeopleSearchLibrary);
  public constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
     
    });
  }

  public getCustomLayouts(): ILayoutDefinition[] {
    return [];
  }

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'get-function-component',
        componentClass: MyGetFunctionComponentWebComponent
      }
    ];
  }

  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [];
  }

  public registerHandlebarsCustomizations(namespace: typeof Handlebars): void {

  }


  public invokeCardAction(action: IAdaptiveCardAction): void {

    // Process the action based on type
    
  }

  public name(): string {
    return 'PeopleSearchLibrary';
  }
}