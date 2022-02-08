import fs from 'fs';

import test, { ExecutionContext } from 'ava';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';

test('read brain 8 xml', (t: ExecutionContext) => {
  const sampleBrainXMLFile = '/Users/wei/Lobby/the8brain/src/data/ABC.xml';

  const parser = new XMLParser();
  const jObj = parser.parse(fs.readFileSync(sampleBrainXMLFile));

  const builder = new XMLBuilder({});
  const xmlContent = builder.build(jObj);
  console.log(xmlContent);

  t.true(true);
});
