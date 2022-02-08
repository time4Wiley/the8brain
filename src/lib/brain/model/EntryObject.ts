import { ObjectID, ObjectType } from '../../TheBrain8';

export class EntryObject {
  public objectType: ObjectType;
  public objectID: ObjectID;

  public constructor(props?: EntryObject) {
    if (props) {
      this.objectType = props.objectType.toString();
      this.objectID = props.objectID;
    }
  }
}
