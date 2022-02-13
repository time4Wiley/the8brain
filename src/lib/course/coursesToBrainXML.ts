import fs from 'fs';
import path from 'path';

import { BrainConfig } from '../brain/brainConfig';
import { brain2XML } from '../brain/converters/brain2XML';
import { TheBrain8 } from '../brain/model/TheBrain8';
import { sleep } from '../utils';
import { generateXMLStringFromRootElement } from '../xmlbuilder/xmlBuilderUtil';

import { Course } from './Course';
import { createBrainForCourse, parseCourseFromJSON } from './course2Brain';

function coursesFromPath(pathForCourseJsonFiles: string) {

  const files = fs.readdirSync(pathForCourseJsonFiles);

  const courses: Course[] = [];
  for (const file of files) {
    console.log(file);
    const fileFullPath = path.join(pathForCourseJsonFiles, file);

    const course = parseCourseFromJSON(
      fs.readFileSync(fileFullPath, 'utf8').toString()
    );
    if (course) {
      courses.push(course);
    }
  }

  return courses;
}

function coursesToBrainXMLAtPath(courses: Course[], xmlPath: string) {
  const fileRoot = path.basename(xmlPath);

  function createBrainForCourseWithFileRoot(fileRoot: string):((course: Course) => TheBrain8) {
    return function (course: Course) {
      return createBrainForCourse(course, fileRoot)
    }
  }

  const brains = courses.map(createBrainForCourseWithFileRoot(fileRoot));

  const oneBrain = new TheBrain8();
  const brand = 'ZTM';
  const brandThought = oneBrain.addThoughtWithTitleLabelURL(
    brand,
    '',
    'https://zerotomastery.io'
  );
  oneBrain.addSourceWithHomeThought(brandThought.guid, brand, fileRoot);

  for (const brain of brains) {
    sleep(BrainConfig.sleep);

    oneBrain.linkParentToChild(brandThought, brain.thoughts[0]);

    oneBrain.mergeWithBrain(brain);
  }

  const root = brain2XML(oneBrain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync(xmlPath, xmlString);
}

function main() {
  const courses = coursesFromPath('/Users/wei/Lobby/the8brain/src/data/courses');

  coursesToBrainXMLAtPath(
    courses,
    '/Users/wei/mybrain/temp/course_brain_xml/generated_again.xml'
  );
}

main()


