import fs from 'fs';

import { plainToClass } from 'class-transformer';
import { paste } from 'copy-paste';

import 'reflect-metadata';
import { brain2XML } from '../brain/converters/brain2XML';
import { TheBrain8 } from '../brain/model/TheBrain8';
import { Thought } from '../brain/model/Thought';
import { isJsonString, sleep } from '../utils';
import { generateXMLStringFromRootElement } from '../xmlbuilder/xmlBuilderUtil';

import { Course } from './Course';

function parseCourseFromJSON(courseJsonString: string) {
  const courseJsonFromChrome = JSON.parse(courseJsonString);

  const courses = plainToClass(Course, [courseJsonFromChrome]);
  return courses[0];
}

export function getSampleCourse() {
  const courseJsonString = fs.readFileSync(
    '/Users/wei/Lobby/the8brain/src/data/ztm.sample.json',
    'utf-8'
  );
  return parseCourseFromJSON(courseJsonString);
}

const course = getSampleCourse();
console.log(course);
// to TheBrain text outline
// brain.
// reference the Python Code
export function createBrainForCourse(
  course: Course,
  meta?: ICourseMeta | undefined
): TheBrain8 {
  const brain = new TheBrain8();

  const label = [meta?.brand, meta?.abbrev].join(', ');
  const courseThought = brain.addThoughtWithTitleLabelURL(
    course.title,
    label,
    course.url
  );

  brain.addSourceWithHomeThought(courseThought.guid, 'course brain');

  let lastSectionThought: Thought | null = null;
  let currentSectionThought: Thought | null = null;

  for (const section of course.sections) {
    sleep(100);
    const sectionThought = brain.addThoughtWithTitle(section.title, label);

    brain.linkParentToChild(courseThought, sectionThought);

    currentSectionThought = sectionThought;
    if (lastSectionThought && currentSectionThought) {
      brain.jumpLink(lastSectionThought, currentSectionThought);
    }

    lastSectionThought = sectionThought;

    let lastLectureThought: Thought | null = null;
    let currentLectureThought: Thought | null = null;

    for (const lecture of section.lectures) {
      sleep(100);

      currentLectureThought = brain.addThoughtWithTitleLabelURL(
        lecture.title,
        label,
        lecture.url
      );

      brain.linkParentToChild(currentSectionThought, currentLectureThought);

      if (lastLectureThought !== null && currentLectureThought) {
        brain.jumpLink(lastLectureThought, currentLectureThought);
      }

      lastLectureThought = currentLectureThought;
    }
  }

  return brain;
}

function courseToBrainXMLAtPath(
  course: Course,
  path: string,
  meta: ICourseMeta | undefined
) {
  const brain = createBrainForCourse(course, meta);

  const root = brain2XML(brain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync(path, xmlString);
}

export function sampleJSONFileToBrainXML(path: string) {
  const course = getSampleCourse();

  const brand = 'ZTM';
  const abbrev = 'JS';

  courseToBrainXMLAtPath(course, path, { brand, abbrev });
}

function fromClipboardJsonToBrainXML(xmlPath: string, meta?: ICourseMeta) {
  const content = paste();

  if (!isJsonString(content)) {
    return;
  }

  const course = parseCourseFromJSON(content);

  courseToBrainXMLAtPath(course, xmlPath, meta);
}

const xmlPath = '/Users/wei/Lobby/the8brain/src/data/generated_again.xml';

interface ICourseMeta {
  brand: string;
  abbrev: string;
}

const courseMeta: ICourseMeta = {
  brand: 'ZTM',
  abbrev: 'FPY',
};
fromClipboardJsonToBrainXML(xmlPath, courseMeta);
