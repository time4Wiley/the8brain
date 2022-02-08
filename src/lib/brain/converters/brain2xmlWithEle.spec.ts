import fs from 'fs';

import test, { ExecutionContext } from 'ava';

import { log_xml_for_root } from '../../../tesUtils';
import { generateXMLStringFromRootElement } from '../../xmlbuilder/xmlBuilderUtil';

import { brain2XML } from './brain2XML';
import { brainSampleFactory } from './brainSampleFactory';
import { parseBrain8XML } from './parseBrain8XMLFunc';

test.skip('thoughts', (t: ExecutionContext) => {
  const brain = brainSampleFactory();

  // console.log(brain);

  const root = brain2XML(brain);

  log_xml_for_root(root);
  t.true(true);
});

test.skip('test finish', (t: ExecutionContext) => {
  testFinish();
  t.true(true);
});

function testFinish() {
  const brain = parseBrain8XML();

  const root = brain2XML(brain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync('generated.xml', xmlString);
}
