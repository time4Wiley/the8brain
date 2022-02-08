import {
  AttributeGuid,
  CreationDateTime,
  Data,
  DeletedDateTime,
  Guid,
  ModificationDateTime,
  ThoughtGuid,
} from '../../TheBrain8';

export class AttributeData {
  public guid: Guid;
  public thoughtGuid: ThoughtGuid;
  public attributeGuid: AttributeGuid;
  public data: Data;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;

  public constructor(props?: AttributeData) {
    if (props) {
      this.guid = props.guid;
      this.thoughtGuid = props.thoughtGuid;
      this.attributeGuid = props.attributeGuid;
      this.data = props.data;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
    }
  }
}
