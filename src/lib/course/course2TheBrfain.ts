import fs from 'fs';

import { plainToClass } from 'class-transformer';

import 'reflect-metadata';
import { pbCopy } from '../utils';

import { Course } from './Course';

const dataArray = JSON.parse(
  fs.readFileSync(
    '/Users/wei/Lobby/ZTM2Brain/src/data/ztm.sample.json',
    'utf-8'
  )
);

pbCopy('test string');

const courses = plainToClass(Course, [dataArray]);
const course = courses[0];
console.log(course);
// to TheBrain text outline
// brain.
// reference the Python Code
