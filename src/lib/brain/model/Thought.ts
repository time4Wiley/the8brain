import { v4 as uuidv4 } from 'uuid';

import {
  AccessControlType,
  ActivationDateTime,
  Color,
  CreationDateTime,
  DeletedDateTime,
  DisplayModificationDateTime,
  ForgottenDateTime,
  Guid,
  IsType,
  Label,
  LinksModificationDateTime,
  Name,
  RealModificationDateTime,
} from '../../TheBrain8';
import { getNowInTheBrainStringFormat } from '../../utils';

import { Attachment } from './Attachment';
import { Entry } from './Entry';
import { EntryObject } from './EntryObject';

export class Thought {
  public guid: Guid;
  public name: Name;
  public label: Label;
  public creationDateTime: CreationDateTime;
  public realModificationDateTime: RealModificationDateTime;
  public displayModificationDateTime: DisplayModificationDateTime;
  public forgottenDateTime: ForgottenDateTime;
  public deletedDateTime: DeletedDateTime;
  public activationDateTime: ActivationDateTime;
  public linksModificationDateTime: LinksModificationDateTime;
  public isType: IsType;
  public color: Color;
  public accessControlType: AccessControlType;

  public constructor(props?: Thought) {
    if (props) {
      this.guid = props.guid;
      this.name = props.name;
      this.label = props.label;
      this.creationDateTime = props.creationDateTime;
      this.realModificationDateTime = props.realModificationDateTime;
      this.displayModificationDateTime = props.displayModificationDateTime;
      this.forgottenDateTime = props.forgottenDateTime;
      this.deletedDateTime = props.deletedDateTime;
      this.activationDateTime = props.activationDateTime;
      this.linksModificationDateTime = props.linksModificationDateTime;
      this.isType = props.isType;
      this.color = props.color;
      this.accessControlType = props.accessControlType;
    }
  }

  public static buildThought(
    name: string,
    label: string,
    url: string
  ): [thought: Thought, entry: Entry, attachment: Attachment] {
    const thought = this.buildThoughtForTitle(name);
    label = 'dummy label';
    thought.label = label;

    const attachment = new Attachment();
    attachment.attachmentType = 3;
    attachment.location = url;
    attachment.creationDateTime = getNowInTheBrainStringFormat();
    attachment.modificationDateTime = getNowInTheBrainStringFormat();
    attachment.format = '.com';

    const entry = new Entry();
    entry.guid = uuidv4();
    entry.EntryObjects.push(
      new EntryObject({ objectID: thought.guid, objectType: 0 })
    );
    entry.creationDateTime = getNowInTheBrainStringFormat();
    entry.modificationDateTime = getNowInTheBrainStringFormat();

    attachment.AttachmentEntries.push(entry.guid);

    return [thought, entry, attachment];
  }

  static buildThoughtForTitle(title: string) {
    const thought = new Thought();
    thought.name = title;
    thought.guid = uuidv4();
    thought.creationDateTime = getNowInTheBrainStringFormat();
    thought.realModificationDateTime = getNowInTheBrainStringFormat();
    thought.displayModificationDateTime = getNowInTheBrainStringFormat();
    return thought;
  }
}
