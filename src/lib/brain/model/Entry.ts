import { IChildKeyForArrayProperty } from '../../IChildKeyForArrayProperty';
import {
  Body,
  CreationDateTime,
  DeletedDateTime,
  Guid,
  ModificationDateTime,
} from '../../TheBrain8';

import { EntryObject } from './EntryObject';

export class Entry implements IChildKeyForArrayProperty {
  public guid: Guid;
  public EntryObjects: EntryObject[];
  public body: Body;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;
  private childKeyForArrayProperty: { [key: string]: string } = {
    EntryObjects: 'EntryObject',
  };

  public constructor(props?: Entry) {
    if (props) {
      this.guid = props.guid;
      this.EntryObjects = props.EntryObjects?.map((o) => new EntryObject(o));
      this.body = props.body;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
    }
  }

  getKeyForPropertyChild(propertyName: string): string {
    return this.childKeyForArrayProperty[propertyName];
  }
}
