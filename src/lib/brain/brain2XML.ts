import { create } from 'xmlbuilder2';

import { TheBrain8 } from '../TheBrain8';
import { mapObjectToXMLElement } from '../xmlbuilder/xmlBuilderUtil';

export function brain2XML(brain: TheBrain8) {
  const root = create().dtd({}).doc();
  const eBrainData = root.ele('BrainData');
  const pluralMapping = {
    attributes: ['Attributes', 'Attribute'],
    thoughts: ['Thoughts', 'Thought'],
    links: ['Links', 'Link'],
    entries: ['Entries', 'Entry'],
    attachments: ['Attachments', 'Attachment'],
  };

  // const subPluralMapping = {
  //   entryObjects: ['EntryObjects', 'EntryObject'],
  //   attachmentEntries: ['AttachmentEntries', 'AttachmentEntry'],
  // };

  const sourceElement = eBrainData.ele('Source');

  mapObjectToXMLElement(brain.source, sourceElement);

  for (const [key, [plural, singular]] of Object.entries(pluralMapping)) {
    console.log(key);
    const eForMany = eBrainData.ele(plural);
    for (const obj of brain[key]) {
      const eForOne = eForMany.ele(singular);

      mapObjectToXMLElement(obj, eForOne);
    }
  }
  return root;
}
