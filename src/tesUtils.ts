import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

import { generateXMLStringFromRootElement } from './lib/xmlbuilder/xmlBuilderUtil';

export function log_xml_for_root(root: XMLBuilder) {
  console.log(generateXMLStringFromRootElement(root));
}
