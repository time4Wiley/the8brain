import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

import { isIChildKeyForArrayProperty } from '../IChildKeyForArrayProperty';

export function mapObjectToXMLElement(obj: any, root: XMLBuilder): void {
  Object.keys(obj).forEach((attr: string) => {
    const value = obj[attr];
    if (typeof value === 'string') {
      root.ele(attr).txt(value);
    } else if (Array.isArray(value)) {
      if (isIChildKeyForArrayProperty(obj)) {
        const childKey = obj.getKeyForPropertyChild(attr);

        const eForChildren = root.ele(attr);

        for (const atom of value) {
          if (
            typeof atom === 'object' &&
            !Array.isArray(atom) &&
            atom !== null
          ) {
            const eForChild = eForChildren.ele(childKey);
            mapObjectToXMLElement(atom, eForChild);
          } else {
            eForChildren.ele(childKey).txt(atom);
          }
        }
      }
    }
  });
}
