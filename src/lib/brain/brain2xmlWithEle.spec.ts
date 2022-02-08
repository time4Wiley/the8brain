import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';

import { brainToXML } from './brainToXML';

test.skip('thoughts', (t: ExecutionContext) => {
  const brain = brainToXML();

  // console.log(brain);

  const root = create().dtd({}).doc();
  const eBrainData = root.ele('BrainData');
  const pluralMapping = {
    thoughts: ['Thoughts', 'Thought'],
    attributes: ['Attributes', 'Attribute'],
    links: ['Links', 'Link'],
    entries: ['Entries', 'Entry'],
    attachments: ['Attachments', 'Attachment'],
    entryObjects: ['EntryObjects', 'EntryObject'],
  };

  for (const [key, [plural, singular]] of Object.entries(pluralMapping)) {
    console.log(key);
    const eForMany = eBrainData.ele(plural);
    for (const values of brain[key]) {
      const eForOne = eForMany.ele(singular);
      Object.keys(values).forEach((attr: string) => {
        const value = values[attr];
        if (typeof value === 'string') {
          eForOne.ele(attr).txt(value);
        }
      });
    }
  }

  log_xml_for_root(root);
  t.true(true);
});
