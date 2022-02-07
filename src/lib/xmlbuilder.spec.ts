import test, {ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

test('xml generating', (t:ExecutionContext) => {

  const root = create({ version: '1.0' })
    .ele('root', { att: 'val' })
    .ele('foo')
    .ele('bar').txt('foobar').up()
    .up()
    .ele('baz').up()
    .up();

// convert the XML tree to string
  const xml = root.end({ prettyPrint: true });
  console.log(xml);

  t.true(xml.length > 0)
})


