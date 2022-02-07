import test, {ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

test('brain2xml', (t:ExecutionContext) => {

  const root = create({version: '1.0'});

  const xml = root.end({ prettyPrint: true });

  console.log(xml)
  t.true(true)
})
