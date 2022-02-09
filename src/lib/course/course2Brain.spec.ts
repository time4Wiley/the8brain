import test, { ExecutionContext } from 'ava';

import { sampleJSONFileToBrainXML } from './course2Brain';

test('course2brain', (t: ExecutionContext) => {
  sampleJSONFileToBrainXML();

  t.true(true);
});
