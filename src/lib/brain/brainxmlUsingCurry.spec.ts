import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';

test.skip('doc type curry', (t: ExecutionContext) => {
  const root = create().dtd({}).doc();

  root
    .ele('BrainData')
    .ele('Source')
    .up()
    .ele('Attributes')
    .up()
    .ele('Thoughts')
    .ele('Thought')
    .ele('guid')
    .txt('026D04F7-7CE3-360A-20B5-8487606E2367')
    .up()
    .ele('name')
    .txt('Cat')
    .up()
    .ele('label')
    .txt('smiley')
    .up()

    .up()
    .up()
    .ele('Links')
    .up()
    .ele('Entries')
    .up()
    .ele('Attachments')
    .up();

  log_xml_for_root(root);
  t.true(true);
});
