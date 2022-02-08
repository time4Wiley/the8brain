import test, { ExecutionContext } from 'ava';

import { fromCourseJsonToBrainXML } from './course2Brain';

test('course2brain', (t: ExecutionContext) => {
  fromCourseJsonToBrainXML();

  t.true(true);
});
