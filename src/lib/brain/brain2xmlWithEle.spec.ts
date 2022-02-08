import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';
import { Thought } from '../TheBrain8';

import { brainToXML } from './brainToXML';

test('thoughts', (t: ExecutionContext) => {
  const brain = brainToXML();

  // console.log(brain);

  const root = create().dtd({}).doc();

  // Thoughts
  const eThoughts = root.ele('Thoughts');
  for (const thought of brain.thoughts) {
    const eThought = eThoughts.ele('Thought');
    Object.keys(thought).forEach((key: string) => {
      console.log(key);
      const value = thought[key];
      if (typeof value === 'string') {
        eThought.ele(key).txt(value);
      }
    });
  }

  log_xml_for_root(root);
  t.true(true);
});
