import {XMLBuilder} from "xmlbuilder2/lib/interfaces";

export function log_xml_for_root(root: XMLBuilder) {
    console.log(root.end({prettyPrint: true}));
}
