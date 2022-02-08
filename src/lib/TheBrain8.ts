interface IRawParams {
  [key: string]: any;
}

export class TheBrain8 implements IRawParams {
  [k: string]: any;

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
}

export class BrainData {
  public Source: Source;
  public Attributes: Attribute[];
  public Thoughts: Thought[];
  public Links: Link[];
  public AttributeDatas: AttributeData[];
  public Entries: Entry[];
  public Attachments: Attachment[];

  public constructor(props?: BrainData) {
    if (props) {
      this.Source = new Source(props.Source);
      this.Attributes = props.Attributes?.map((o) => new Attribute(o));
      this.Thoughts = props.Thoughts?.map((o) => new Thought(o));
      this.Links = props.Links?.map((o) => new Link(o));
      this.AttributeDatas = props.AttributeDatas?.map(
        (o) => new AttributeData(o)
      );
      this.Entries = props.Entries?.map((o) => new Entry(o));
      this.Attachments = props.Attachments?.map((o) => new Attachment(o));
    }
  }
}

export class Source {
  public guid: Guid;
  public name: Name;
  public personalBrainVersion: PersonalBrainVersion;
  public telepathyVersion: TelepathyVersion;
  public fileRoot: FileRoot;
  public generatedDateTime: GeneratedDateTime;
  public homeThoughtGuid: HomeThoughtGuid;
  public brainXmlSettings: BrainXmlSettings;
  public modificationDateTime: ModificationDateTime;

  public constructor(props?: Source) {
    if (props) {
      this.guid = props.guid;
      this.name = props.name;
      this.personalBrainVersion = props.personalBrainVersion;
      this.telepathyVersion = props.telepathyVersion;
      this.fileRoot = props.fileRoot;
      this.generatedDateTime = props.generatedDateTime;
      this.homeThoughtGuid = props.homeThoughtGuid;
      this.brainXmlSettings = props.brainXmlSettings;
      this.modificationDateTime = props.modificationDateTime;
    }
  }
}

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
}

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

export class Entry {
  public guid: Guid;
  public EntryObjects: EntryObject[];
  public body: Body;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;

  public constructor(props?: Entry) {
    if (props) {
      this.guid = props.guid;
      this.EntryObjects = props.EntryObjects?.map((o) => new EntryObject(o));
      this.body = props.body;
      this.creationDateTime = props.creationDateTime;
      this.modificationDateTime = props.modificationDateTime;
      this.deletedDateTime = props.deletedDateTime;
    }
  }
}

export class EntryObject {
  public objectType: ObjectType;
  public objectID: ObjectID;

  public constructor(props?: EntryObject) {
    if (props) {
      this.objectType = props.objectType;
      this.objectID = props.objectID;
    }
  }
}

export class Attachment {
  public guid: Guid;
  public AttachmentEntries: AttachmentEntryID[];
  public objectID: ObjectID;
  public name: Name;
  public attachmentType: AttachmentType;
  public location: Location;
  public dataLength: DataLength;
  public format: Format;
  public creationDateTime: CreationDateTime;
  public modificationDateTime: ModificationDateTime;
  public deletedDateTime: DeletedDateTime;

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
}

export type Guid = string;
export type Name = string;
export type PersonalBrainVersion = string;
export type TelepathyVersion = string;
export type FileRoot = string;
export type GeneratedDateTime = string;
export type HomeThoughtGuid = string;
export type BrainXmlSettings = string;
export type Label = string;
export type Keywords = string;
export type CreationDateTime = string;
export type RealModificationDateTime = string;
export type DisplayModificationDateTime = string;
export type ForgottenDateTime = string;
export type DeletedDateTime = string;
export type ActivationDateTime = string;
export type LinksModificationDateTime = string;
export type IsType = string;
export type Color = string;
export type AccessControlType = string;
export type IdA = string;
export type IdB = string;
export type Dir = string;
export type LabelForward = string;
export type LabelBackward = string;
export type ModificationDateTime = string;
export type FollowDateTime = string;
export type Thickness = string;
export type Meaning = string;
export type LinkTypeID = string;
export type ObjectType = string;
export type ObjectID = string;
export type Body = string;
export type AttachmentType = string;
export type Location = string;
export type DataLength = string;
export type Format = string;
export type AttachmentEntryID = string;
export type ThoughtGuid = string;
export type AttributeGuid = string;
export type Data = string;
export type IsDisplayed = string;
export type IsEditable = string;
export type OrderRank = string;
export type DataType = string;
