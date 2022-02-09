import fs from 'fs';
import path from 'path';

import { paste } from 'copy-paste';

import { ICourseMeta } from '../Course';
import { checkIsCourseJsonString } from '../courseUtils';

function saveCourseJSONFromClipboardToCoursesDir(courseDir: string) {
  // read course meta, compose file name
  // save the clipboard content to courseDir
  const content = paste();
  const [isCourse, json] = checkIsCourseJsonString(content);
  if (!isCourse) {
    return;
  }

  const meta = json['meta'] as ICourseMeta;
  const jsonFileName = [meta.abbrev, meta.brand].join('@') + '.json';

  fs.writeFileSync(path.join(courseDir, jsonFileName), content, {
    encoding: 'utf8',
  });
}

saveCourseJSONFromClipboardToCoursesDir(
  '/Users/wei/Lobby/the8brain/src/data/courses'
);
