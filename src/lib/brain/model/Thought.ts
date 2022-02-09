import { v4 as uuidv4 } from 'uuid';

import {
  ActivationDateTime,
  CreationDateTime,
  DeletedDateTime,
  DisplayModificationDateTime,
  ForgottenDateTime,
  Guid,
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
  public isType: number;
  public color: number;
  public accessControlType: number;

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
    const thought = this.buildThoughtForTitle(name, label);
    thought.label = label;

    const attachment = new Attachment();
    attachment.attachmentType = 3;
    attachment.location = url;
    attachment.creationDateTime = getNowInTheBrainStringFormat();
    attachment.modificationDateTime = getNowInTheBrainStringFormat();
    attachment.format = '.com';
    attachment.guid = uuidv4();
    attachment.name = 'attachment name';
    attachment.objectID = thought.guid;

    const entry = new Entry();
    entry.guid = uuidv4();
    entry.EntryObjects.push(
      new EntryObject({ objectID: thought.guid, objectType: 0 })
    );
    entry.creationDateTime = getNowInTheBrainStringFormat();
    entry.modificationDateTime = getNowInTheBrainStringFormat();
    entry.body = '';
    entry.format = 'HTML';

    attachment.AttachmentEntries.push(entry.guid);

    return [thought, entry, attachment];
  }

  static buildThoughtForTitle(title: string, label: string) {
    const thought = new Thought();
    thought.name = title;
    thought.label = label;
    thought.guid = uuidv4();
    thought.creationDateTime = getNowInTheBrainStringFormat();
    thought.realModificationDateTime = getNowInTheBrainStringFormat();
    thought.displayModificationDateTime = getNowInTheBrainStringFormat();
    thought.isType = 0;
    thought.color = 0;
    thought.accessControlType = 0;
    thought.activationDateTime = getNowInTheBrainStringFormat();

    return thought;
  }
}
