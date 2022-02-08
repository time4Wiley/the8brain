import {
  CreationDateTime,
  DataType,
  DeletedDateTime,
  Guid,
  IsDisplayed,
  IsEditable,
  ModificationDateTime,
  Name,
  OrderRank,
} from '../../TheBrain8';

export class Attribute {
  public guid: Guid;
  public name: Name;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;
  public isDisplayed: IsDisplayed;
  public isEditable: IsEditable;
  public orderRank: OrderRank;
  public dataType: DataType;

  public constructor(props?: Attribute) {
    if (props) {
      this.guid = props.guid;
      this.name = props.name;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
      this.isDisplayed = props.isDisplayed;
      this.isEditable = props.isEditable;
      this.orderRank = props.orderRank;
      this.dataType = props.dataType;
    }
  }
}
