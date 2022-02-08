import fs from 'fs';

import { plainToClass } from 'class-transformer';

import 'reflect-metadata';

import { Course } from './Course';

export function getSampleCourse() {
  const courseJsonFromChrome = JSON.parse(
    fs.readFileSync(
      '/Users/wei/Lobby/ZTM2Brain/src/data/ztm.sample.json',
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
