import {
  Color,
  CreationDateTime,
  DeletedDateTime,
  Dir,
  FollowDateTime,
  Guid,
  IdA,
  IdB,
  IsType,
  LabelBackward,
  LabelForward,
  LinkTypeID,
  Meaning,
  ModificationDateTime,
  Name,
  Thickness,
} from '../../TheBrain8';

export class Link {
  public guid: Guid;
  public idA: IdA;
  public idB: IdB;
  public dir: Dir;
  public name: Name;
  public labelForward: LabelForward;
  public labelBackward: LabelBackward;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;
  public followDateTime: FollowDateTime;
  public isType: IsType;
  public color: Color;
  public thickness: Thickness;
  public meaning: Meaning;
  public linkTypeID: LinkTypeID;

  public constructor(props?: Link) {
    if (props) {
      this.guid = props.guid;
      this.idA = props.idA;
      this.idB = props.idB;
      this.dir = props.dir;
      this.name = props.name;
      this.labelForward = props.labelForward;
      this.labelBackward = props.labelBackward;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
      this.followDateTime = props.followDateTime;
      this.isType = props.isType;
      this.color = props.color;
      this.thickness = props.thickness;
      this.meaning = props.meaning;
      this.linkTypeID = props.linkTypeID;
    }
  }
}
