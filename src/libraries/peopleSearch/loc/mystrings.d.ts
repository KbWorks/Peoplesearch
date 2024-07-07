declare interface IPeopleSearchLibraryStrings {
 PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  CustomQueryModifier: {
      GroupName:string;
      PrefixLabel:string;
      PrefixDescription:string;
      PrefixPlaceholder:string;
      SuffixLabel:string;
      SuffixDescription:string;
      SuffixPlaceholder:string;
    }
}
declare module 'PeopleSearchLibraryStrings' {
  const strings: IPeopleSearchLibraryStrings;
  export = strings;
}
