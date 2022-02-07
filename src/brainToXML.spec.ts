import test, {ExecutionContext } from 'ava';
import { create } from 'xmlbuilder2';

test('brain2xml', (t:ExecutionContext) => {

  const root = create({version: '1.0', encoding:'UTF-8'}).ele({});

  const xml = root.end({ prettyPrint: true });

  console.log(xml)
  t.true(true)
})

test('doc type', (t:ExecutionContext) => {

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

  console.log(root.end({ prettyPrint: true }))
  t.true(true)

})
