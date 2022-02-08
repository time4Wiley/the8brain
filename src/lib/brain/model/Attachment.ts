import { IChildKeyForArrayProperty } from '../../IChildKeyForArrayProperty';
import {
  AttachmentEntryID,
  AttachmentType,
  CreationDateTime,
  DataLength,
  DeletedDateTime,
  Format,
  Guid,
  Location,
  ModificationDateTime,
  Name,
  ObjectID,
} from '../../TheBrain8';

export class Attachment implements IChildKeyForArrayProperty {
  public guid: Guid;
  public AttachmentEntries: AttachmentEntryID[];
  public objectID: ObjectID;
  public name: Name;
  public attachmentType: number;
  public location: Location;
  public dataLength: DataLength;
  public format: Format;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;

  private childKeyForArrayProperty: { [key: string]: string } = {
    AttachmentEntries: 'AttachmentEntryID',
  };

  public constructor(props?: Attachment) {
    if (props) {
      this.guid = props.guid;
      this.AttachmentEntries = props.AttachmentEntries?.map((o) => o);
      this.objectID = props.objectID;
      this.name = props.name;
      this.attachmentType = props.attachmentType;
      this.location = props.location;
      this.dataLength = props.dataLength;
      this.format = props.format;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
    }
  }

  public getKeyForPropertyChild(propertyName: string): string {
    return this.childKeyForArrayProperty[propertyName];
  }
}
