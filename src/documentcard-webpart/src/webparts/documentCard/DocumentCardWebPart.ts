require('set-webpack-public-path!');
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'documentCardStrings';
import DocumentCard from './components/DocumentCard';
import { IDocumentCardProps } from './components/IDocumentCardProps';
import { IDocumentCardWebPartProps } from './IDocumentCardWebPartProps';

export default class DocumentCardWebPart extends BaseClientSideWebPart<IDocumentCardWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDocumentCardProps > = React.createElement(
      DocumentCard,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}