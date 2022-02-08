import test, { ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

import { log_xml_for_root } from '../../tesUtils';

import { brainToXML } from './brainToXML';

test.skip('brain2xml', (t: ExecutionContext) => {
  const root = create({ version: '1.0', encoding: 'UTF-8' }).ele({});

  const xml = root.end({ prettyPrint: true });

  console.log(xml);
  t.true(true);
});

test.skip('TheBrain8', (t: ExecutionContext) => {
  const brain8 = brainToXML();
  const doc = create(brain8);
  console.log(doc.end({ prettyPrint: true }));
  t.true(true);
});

test('xml spreading', (t: ExecutionContext) => {
  const root = create().dtd({}).doc();
  root.ele('BrainData').ele('Source').up();
  log_xml_for_root(root);
  t.true(true);
});

test('xml from literal object', (t: ExecutionContext) => {
  const obj = {
    root: {
      '@att': 'val',
      foo: {
        bar: 'foobar',
      },
      baz: {},
    },
  };

  const doc = create(obj);
  log_xml_for_root(doc);
  t.true(true);
});

test('xml for brain in literal object', (t: ExecutionContext) => {
  t.true(true);
});
