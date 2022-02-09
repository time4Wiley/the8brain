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

function checkIsCourseJsonString(
  jsonString: string
): [isCourse: boolean, json: any] {
  const courseJsonFromChrome = JSON.parse(jsonString);

  const isCourse =
    courseJsonFromChrome['meta'] && courseJsonFromChrome['title'];
  return [isCourse, isCourse ? courseJsonFromChrome : null];
}

function parseCourseFromJSON(courseJsonString: string) {
  const [isCourse, json] = checkIsCourseJsonString(courseJsonString);

  return isCourse ? plainToClass(Course, [json])[0] : null;
}

export function getSampleCourse() {
  const courseJsonString = fs.readFileSync(
    '/Users/wei/Lobby/the8brain/src/data/ztm.sample.json',
    'utf-8'
  );
  return parseCourseFromJSON(courseJsonString);
}

export function createBrainForCourse(course: Course): TheBrain8 {
  const brain = new TheBrain8();

  const label = [course.meta?.brand, course.meta?.abbrev].join(', ');
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

function courseToBrainXMLAtPath(course: Course, path: string) {
  const brain = createBrainForCourse(course);

  const root = brain2XML(brain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync(path, xmlString);
}

export function sampleJSONFileToBrainXML(path: string) {
  const course = getSampleCourse();
  if (!course) {
    throw new Error('sample json is not a course!');
  }

  courseToBrainXMLAtPath(course, path);
}

function fromClipboardJsonToBrainXML(xmlPath: string) {
  const content = paste();

  if (!isJsonString(content)) {
    return;
  }

  const course = parseCourseFromJSON(content);

  if (!course) {
    throw new Error('sample json is not a course!');
  }

  courseToBrainXMLAtPath(course, xmlPath);
}

const xmlPath = '/Users/wei/Lobby/the8brain/src/data/generated_again.xml';

fromClipboardJsonToBrainXML(xmlPath);
