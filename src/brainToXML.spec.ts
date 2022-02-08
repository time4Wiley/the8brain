import test, {ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';
import { brainToXML } from './brainToXML';

test.skip('brain2xml', (t:ExecutionContext) => {

  const root = create({version: '1.0', encoding:'UTF-8'}).ele({});

  const xml = root.end({ prettyPrint: true });

  console.log(xml)
  t.true(true)
})

function log_xml_for_root(root: XMLBuilder) {
  console.log(root.end({ prettyPrint: true }));
}

test.skip('doc type curry', (t:ExecutionContext) => {

  const root = create().dtd({}).doc()

  root.ele("BrainData")
    .ele("Source")
    .up()
    .ele("Attributes")
    .up()
    .ele("Thoughts")
    .ele("Thought")
    .ele('guid').txt('026D04F7-7CE3-360A-20B5-8487606E2367').up()
    .ele('name').txt('Cat').up()
    .ele('label').txt('smiley').up()

    .up()
    .up()
    .ele("Links").up().ele('Entries').up().ele('Attachments').up()

  log_xml_for_root(root);
  t.true(true)

})

test('TheBrain8', (t:ExecutionContext) => {
  const brain8 = brainToXML();
  const doc = create(brain8);
  console.log(doc.end({ prettyPrint: true }))
  t.true(true)

})

test('xml spreading', (t:ExecutionContext) => {
    const root = create().dtd({}).doc()
  root.ele("BrainData")
    .ele("Source")
    .up()
    log_xml_for_root(root)
    t.true(true)
})
