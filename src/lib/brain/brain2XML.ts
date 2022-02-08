import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';
import { TheBrain8 } from '../TheBrain8';
import { mapObjectToXMLElement } from '../xmlbuilder/xmlBuilderUtil';

import { parseBrain8XML } from './parseBrain8XMLFunc';

export function brain2XML(brain: TheBrain8) {
  const root = create().dtd({}).doc();
  const eBrainData = root.ele('BrainData');
  const pluralMapping = {
    thoughts: ['Thoughts', 'Thought'],
    attributes: ['Attributes', 'Attribute'],
    links: ['Links', 'Link'],
    entries: ['Entries', 'Entry'],
    attachments: ['Attachments', 'Attachment'],
  };

  // const subPluralMapping = {
  //   entryObjects: ['EntryObjects', 'EntryObject'],
  //   attachmentEntries: ['AttachmentEntries', 'AttachmentEntry'],
  // };

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

const brain = parseBrain8XML();

const root = brain2XML(brain);

log_xml_for_root(root);
