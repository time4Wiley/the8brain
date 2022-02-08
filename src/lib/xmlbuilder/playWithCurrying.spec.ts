import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';

test('ele, up', (t: ExecutionContext) => {
  const root = create().dtd({}).doc();

  const brain = root.ele('brain');
  const fucks = brain.ele('fucks');
  fucks.ele('fuck').up();
  fucks.ele('fuck').up();
  // root.up();
  log_xml_for_root(root);
  t.true(true);
});
