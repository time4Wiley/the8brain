import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';

import { brainToXML } from './brainToXML';

test('xml for brain in literal object', (t: ExecutionContext) => {
  const brain = {
    BrainData: {
      Source: {},
      Attributes: {},
      Thoughts: {},
      Links: {},
      Entries: {},
      Attachments: {},
    },
  };

  const root = create(brain);
  log_xml_for_root(root);

  t.true(true);
});

test.skip('TheBrain8', (t: ExecutionContext) => {
  const brain8 = brainToXML();
  const doc = create(brain8);
  console.log(doc.end({ prettyPrint: true }));
  t.true(true);
});
