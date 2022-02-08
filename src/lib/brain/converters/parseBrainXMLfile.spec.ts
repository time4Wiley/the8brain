import test, { ExecutionContext } from 'ava';

import { parseBrain8XML } from './parseBrain8XMLFunc';

test('read brain 8 xml', (t: ExecutionContext) => {
  parseBrain8XML();

  t.true(true);
});
