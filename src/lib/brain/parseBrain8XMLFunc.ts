import fs from 'fs';

import { XMLParser } from 'fast-xml-parser';

import {
  Attachment,
  Attribute,
  Entry,
  Link,
  Source,
  TheBrain8,
  Thought,
} from '../TheBrain8';

export function parseBrain8XML() {
  const sampleBrainXMLFile = '/Users/wei/Lobby/the8brain/src/data/ABC.xml';

  const parser = new XMLParser();
  const jObj = parser.parse(fs.readFileSync(sampleBrainXMLFile));

  // const builder = new XMLBuilder({});
  // const xmlContent = builder.build(jObj);

  const brain = new TheBrain8();
  const brainData = jObj.BrainData;
  brain.source = new Source(brainData.Source);

  //Attributes
  for (const attribute of brainData.Attributes.Attribute) {
    brain.addAttribute(new Attribute(attribute));
  }
  // Thoughts
  for (const thought of brainData.Thoughts.Thought) {
    brain.addThought(new Thought(thought));
  }
  //Links
  for (const link of brainData.Links.Link) {
    brain.addLink(new Link(link));
  }
  //Entries
  for (const entry of brainData.Entries.Entry) {
    entry.EntryObjects = [entry.EntryObjects.EntryObject];
    brain.addEntry(new Entry(entry));
  }
  //Attachments
  for (const attachment of brainData.Attachments.Attachment) {
    attachment.AttachmentEntries = [
      attachment.AttachmentEntries.attachmentEntryID,
    ];
    brain.addAttachment(new Attachment(attachment));
  }

  return brain;
}
