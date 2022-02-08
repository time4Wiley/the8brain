import test, { ExecutionContext } from 'ava';

import { log_xml_for_root } from '../../tesUtils';

import { brain2XML } from './brain2XML';
import { brainSampleFactory } from './brainSampleFactory';

test.skip('thoughts', (t: ExecutionContext) => {
  const brain = brainSampleFactory();

  // console.log(brain);

  const root = brain2XML(brain);

  log_xml_for_root(root);
  t.true(true);
});
