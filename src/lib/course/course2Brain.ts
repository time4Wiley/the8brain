import fs from 'fs';
import path from 'path';

import {plainToClass} from 'class-transformer';
import {paste} from 'copy-paste';

import 'reflect-metadata';
import {BrainConfig} from '../brain/brainConfig';
import {brain2XML} from '../brain/converters/brain2XML';
import {TheBrain8} from '../brain/model/TheBrain8';
import {Thought} from '../brain/model/Thought';
import {isJsonString, sleep} from '../utils';
import {generateXMLStringFromRootElement} from '../xmlbuilder/xmlBuilderUtil';

import {Course} from './Course';
import {checkIsCourseJsonString} from './courseUtils';


export function parseCourseFromJSON(courseJsonString: string) {
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

function prefixTitleWithIndex(title: string, index: number) {
  return `${index}, ${title}`;
}

export function createBrainForCourse(course: Course, fileRoot:string): TheBrain8 {
  const brain = new TheBrain8();

  const label = [course.meta?.brand, course.meta?.abbrev].join(', ');
  const courseThought = brain.addThoughtWithTitleLabelURL(
    course.title,
    label,
    course.url
  );

  brain.addSourceWithHomeThought(courseThought.guid, 'course brain', fileRoot);

  let lastSectionThought: Thought | null = null;
  let currentSectionThought: Thought | null = null;

  let sectionIndex = 1;
  for (const section of course.sections) {
    sleep(BrainConfig.sleep);
    const thoughtNameForSection = prefixTitleWithIndex(section.title, sectionIndex)
    const sectionThought = brain.addThoughtWithTitle(thoughtNameForSection, label);
    sectionIndex++;
    brain.linkParentToChild(courseThought, sectionThought);

    currentSectionThought = sectionThought;
    if (lastSectionThought && currentSectionThought) {
      brain.jumpLink(lastSectionThought, currentSectionThought);
    }

    lastSectionThought = sectionThought;

    let lastLectureThought: Thought | null = null;
    let currentLectureThought: Thought | null = null;

    let lectureIndex = 1;
    for (const lecture of section.lectures) {
      sleep(BrainConfig.sleep);

      currentLectureThought = brain.addThoughtWithTitleLabelURL(
        prefixTitleWithIndex(lecture.title, lectureIndex),
        label,
        lecture.url
      );

      lectureIndex++;

      brain.linkParentToChild(currentSectionThought, currentLectureThought);

      if (lastLectureThought !== null && currentLectureThought) {
        brain.jumpLink(lastLectureThought, currentLectureThought);
      }

      lastLectureThought = currentLectureThought;
    }
  }

  return brain;
}

function courseToBrainXMLAtPath(course: Course, xmlPath: string) {
  const brain = createBrainForCourse(course, path.basename(xmlPath));

  const root = brain2XML(brain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync(xmlPath, xmlString);
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
