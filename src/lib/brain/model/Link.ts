import { v4 as uuidv4 } from 'uuid';

import {
  CreationDateTime,
  DeletedDateTime,
  FollowDateTime,
  Guid,
  IdA,
  IdB,
  LabelBackward,
  LabelForward,
  LinkTypeID,
  ModificationDateTime,
  Name,
} from '../../TheBrain8';
import { getNowInTheBrainStringFormat } from '../../utils';

export class Link {
  public guid: Guid;
  public idA: IdA;
  public idB: IdB;
  public dir: number;
  public name: Name;
  public labelForward: LabelForward;
  public labelBackward: LabelBackward;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;
  public followDateTime: FollowDateTime;
  public isType: number;
  public color: number;
  public thickness: number;
  public meaning: number;
  public linkTypeID: LinkTypeID;
  public isBackward: number;
  public strength: number;

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
      this.isBackward = props.isBackward;
      this.color = props.color;
      this.thickness = props.thickness;
      this.isBackward = props.isBackward;
      this.strength = props.strength;
    }
  }

  static build(idA: string, idB: string, dir: number) {
    const link = new Link();
    link.guid = uuidv4();
    link.idA = idA;
    link.idB = idB;
    link.isBackward = 0;
    link.isType = 0;
    link.color = 0;
    link.thickness = 0;
    link.strength = 0;
    link.meaning = 0;
    link.creationDateTime = getNowInTheBrainStringFormat();
    link.modificationDateTime = getNowInTheBrainStringFormat();

    link.dir = dir;

    return link;
  }
}
