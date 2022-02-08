import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';
import { Thought } from '../TheBrain8';

import { brainToXML } from './brainToXML';

test('thoughts', (t: ExecutionContext) => {
  const brain = brainToXML();

  // console.log(brain);

  const root = create().dtd({}).doc();
  const eBrainData = root.ele('BrainData');
  const puralMapping = {
    thoughts: ['Thoughts', 'Thought'],
    attributes: ['Attributes', 'Attribute'],
    links: ['Links', 'Link'],
    entries: ['Entries', 'Entry'],
    attachments: ['Attachments', 'Attachment'],
  };

  for (const [key, [pural, singular]] of Object.entries(puralMapping)) {
    console.log(key);
    console.log(pural, singular);

    // Thoughts
    const eForMany = eBrainData.ele(pural);
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
