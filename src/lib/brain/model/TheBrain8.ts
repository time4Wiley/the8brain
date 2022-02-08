import {
  AccessControlType,
  ActivationDateTime,
  AttachmentEntryID,
  AttachmentType,
  AttributeGuid,
  Body,
  BrainXmlSettings,
  Color,
  CreationDateTime,
  Data,
  DataLength,
  DataType,
  DeletedDateTime,
  Dir,
  DisplayModificationDateTime,
  FileRoot,
  FollowDateTime,
  ForgottenDateTime,
  Format,
  GeneratedDateTime,
  Guid,
  HomeThoughtGuid,
  IdA,
  IdB,
  IRawParams,
  IsDisplayed,
  IsEditable,
  IsType,
  Keywords,
  Label,
  LabelBackward,
  LabelForward,
  LinksModificationDateTime,
  LinkTypeID,
  Location,
  Meaning,
  ModificationDateTime,
  Name,
  ObjectID,
  ObjectType,
  OrderRank,
  PersonalBrainVersion,
  RealModificationDateTime,
  TelepathyVersion,
  Thickness,
  ThoughtGuid,
} from '../../TheBrain8';

import { Attachment } from './Attachment';
import { Attribute } from './Attribute';
import { AttributeData } from './AttributeData';
import { BrainData } from './BrainData';
import { Entry } from './Entry';
import { EntryObject } from './EntryObject';
import { Link } from './Link';
import { Source } from './Source';
import { Thought } from './Thought';

export class TheBrain8 implements IRawParams {
  // [k: string]: any;

  public guid: Guid;
  public name: Name;
  public personalBrainVersion: PersonalBrainVersion;
  public telepathyVersion: TelepathyVersion;
  public fileRoot: FileRoot;
  public generatedDateTime: GeneratedDateTime;
  public homeThoughtGuid: HomeThoughtGuid;
  public brainXmlSettings: BrainXmlSettings;
  public label: Label;
  public keywords: Keywords;
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
  public idA: IdA;
  public idB: IdB;
  public dir: Dir;
  public labelForward: LabelForward;
  public labelBackward: LabelBackward;
  public modificationDateTime: ModificationDateTime;
  public followDateTime: FollowDateTime;
  public thickness: Thickness;
  public meaning: Meaning;
  public linkTypeID: LinkTypeID;
  public objectType: ObjectType;
  public objectID: ObjectID;
  public body: Body;
  public attachmentType: AttachmentType;
  public location: Location;
  public dataLength: DataLength;
  public format: Format;
  public attachmentEntryID: AttachmentEntryID;
  public thoughtGuid: ThoughtGuid;
  public attributeGuid: AttributeGuid;
  public data: Data;
  public isDisplayed: IsDisplayed;
  public isEditable: IsEditable;
  public orderRank: OrderRank;
  public dataType: DataType;
  public brainData: BrainData | undefined;
  public source: Source | undefined;
  public attributes: Attribute[] = [];
  public attribute: Attribute | undefined;
  public thoughts: Thought[] = [];
  public thought: Thought | undefined;
  public links: Link[] = [];
  public link: Link | undefined;
  public attributeDatas: AttributeData[] = [];
  public attributeData: AttributeData | undefined;
  public entries: Entry[] = [];
  public entry: Entry | undefined;
  public entryObjects: EntryObject[] = [];
  public entryObject: EntryObject | undefined;
  public attachments: Attachment[] = [];
  public attachment: Attachment | undefined;
  public attachmentEntries: AttachmentEntryID[];

  public constructor(props?: TheBrain8) {
    if (props) {
      this.guid = props.guid;
      this.name = props.name;
      this.personalBrainVersion = props.personalBrainVersion;
      this.telepathyVersion = props.telepathyVersion;
      this.fileRoot = props.fileRoot;
      this.generatedDateTime = props.generatedDateTime;
      this.homeThoughtGuid = props.homeThoughtGuid;
      this.brainXmlSettings = props.brainXmlSettings;
      this.label = props.label;
      this.keywords = props.keywords;
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
      this.idA = props.idA;
      this.idB = props.idB;
      this.dir = props.dir;
      this.labelForward = props.labelForward;
      this.labelBackward = props.labelBackward;
      this.modificationDateTime = props.modificationDateTime;
      this.followDateTime = props.followDateTime;
      this.thickness = props.thickness;
      this.meaning = props.meaning;
      this.linkTypeID = props.linkTypeID;
      this.objectType = props.objectType;
      this.objectID = props.objectID;
      this.body = props.body;
      this.attachmentType = props.attachmentType;
      this.location = props.location;
      this.dataLength = props.dataLength;
      this.format = props.format;
      this.attachmentEntryID = props.attachmentEntryID;
      this.thoughtGuid = props.thoughtGuid;
      this.attributeGuid = props.attributeGuid;
      this.data = props.data;
      this.isDisplayed = props.isDisplayed;
      this.isEditable = props.isEditable;
      this.orderRank = props.orderRank;
      this.dataType = props.dataType;
      this.brainData = props.brainData
        ? new BrainData(props.brainData)
        : undefined;
      this.source = props.source ? new Source(props.source) : undefined;
      this.attributes = props.attributes?.map((o) => new Attribute(o));
      this.attribute = props.attribute
        ? new Attribute(props.attribute)
        : undefined;
      this.thoughts = props.thoughts?.map((o) => new Thought(o));
      this.thought = props.thought ? new Thought(props.thought) : undefined;
      this.links = props.links?.map((o) => new Link(o));
      this.link = props.link ? new Link(props.link) : undefined;
      this.attributeDatas = props.attributeDatas?.map(
        (o) => new AttributeData(o)
      );
      this.attributeData = props.attributeData
        ? new AttributeData(props.attributeData)
        : undefined;
      this.entries = props.entries?.map((o) => new Entry(o));
      this.entry = props.entry ? new Entry(props.entry) : undefined;
      this.entryObjects = props.entryObjects?.map((o) => new EntryObject(o));
      this.entryObject = props.entryObject
        ? new EntryObject(props.entryObject)
        : undefined;
      this.attachments = props.attachments?.map((o) => new Attachment(o));
      this.attachment = props.attachment
        ? new Attachment(props.attachment)
        : undefined;
      this.attachmentEntries = props.attachmentEntries?.map((o) => o);
    }
  }

  addAttribute(attribute: Attribute) {
    this.attributes.push(attribute);
  }

  addThought(thought: Thought) {
    this.thoughts.push(thought);
  }

  addLink(link: Link) {
    this.links.push(link);
  }

  addEntry(entry: Entry) {
    this.entries.push(entry);
  }

  addAttachment(attachment: Attachment) {
    this.attachments.push(attachment);
  }

  addThoughtWithTitleLabelURL(
    title: string,
    label: string,
    url: string
  ): Thought {
    const [thought, entry, attachment] = Thought.buildThought(
      title,
      label,
      url
    );
    this.addThought(thought);
    this.addEntry(entry);
    this.addAttachment(attachment);

    return thought;
  }

  addThoughtWithTitle(title: string): Thought {
    const thought = Thought.buildThoughtForTitle(title);
    this.addThought(thought);

    return thought;
  }
}
