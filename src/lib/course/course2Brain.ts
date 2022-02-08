import fs from 'fs';

import { plainToClass } from 'class-transformer';

import 'reflect-metadata';
import { brain2XML } from '../brain/converters/brain2XML';
import { TheBrain8 } from '../brain/model/TheBrain8';
// import { Thought } from '../brain/model/Thought';
import { generateXMLStringFromRootElement } from '../xmlbuilder/xmlBuilderUtil';

import { Course } from './Course';

export function getSampleCourse() {
  const courseJsonFromChrome = JSON.parse(
    fs.readFileSync(
      '/Users/wei/Lobby/the8brain/src/data/ztm.sample.json',
      'utf-8'
    )
  );

  const courses = plainToClass(Course, [courseJsonFromChrome]);
  const course = courses[0];
  return course;
}

const course = getSampleCourse();
console.log(course);
// to TheBrain text outline
// brain.
// reference the Python Code
export function createBrainForCourse(course: Course): TheBrain8 {
  const brain = new TheBrain8();

  const courseThought = brain.addThoughtWithTitleLabelURL(
    course.title,
    '',
    course.url
  );

  // const courseThought = brain.addThoughtWithTitle(course.title);

  brain.addSourceWithHomeThought(courseThought.guid, 'course brain');

  // let lastSectionThought: Thought | null = null;
  // let currentSectionThought: Thought | null = null;
  //
  // for (const section of [course.sections[0]]) {
  //
  //   const sectionThought = brain.addThoughtWithTitle(section.title);
  //
  //   brain.linkParentToChild(courseThought, sectionThought);
  //
  //   currentSectionThought = sectionThought;
  //   if (lastSectionThought && currentSectionThought) {
  //     brain.jumpLink(lastSectionThought, currentSectionThought);
  //   }
  //
  //   lastSectionThought = sectionThought;
  //
  //   let lastLectureThought: Thought | null = null;
  //   let currentLectureThought: Thought | null = null;
  //
  //   for (const lecture of [section.lectures[0]]) {
  //     const lectureThought = brain.addThoughtWithTitleLabelURL(
  //       lecture.title,
  //       '',
  //       lecture.url
  //     );
  //
  //     currentLectureThought = lectureThought;
  //
  //     brain.linkParentToChild(currentSectionThought, currentLectureThought);
  //
  //     if (lastLectureThought !== null && currentLectureThought) {
  //       brain.jumpLink(lastLectureThought, currentLectureThought);
  //     }
  //
  //     lastLectureThought = currentLectureThought;
  //   }
  // }

  return brain;
}

export function fromCourseJsonToBrainXML() {
  const course = getSampleCourse();

  const brain = createBrainForCourse(course);

  const root = brain2XML(brain);

  const xmlString = generateXMLStringFromRootElement(root);
  fs.writeFileSync('generated_again.xml', xmlString);
}

fromCourseJsonToBrainXML();
