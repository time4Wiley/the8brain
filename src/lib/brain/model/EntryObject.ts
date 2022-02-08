import { ObjectID } from '../../TheBrain8';

export class EntryObject {
  public objectType: number;
  public objectID: ObjectID;

  public constructor(props?: EntryObject) {
    if (props) {
      this.objectType = props.objectType;
      this.objectID = props.objectID;
    }
  }
}
