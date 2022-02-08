import { spawn } from 'child_process';
import fs from 'fs';

import { plainToClass } from 'class-transformer';
import 'reflect-metadata';

import { Course } from '../Course';

import { brainToXML } from './brainToXML';

const dataArray = JSON.parse(
  fs.readFileSync(
    '/Users/wei/Lobby/ZTM2Brain/src/data/ztm.sample.json',
    'utf-8'
  )
);

function pbCopy(data: string) {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}

pbCopy('test string');

const courses = plainToClass(Course, [dataArray]);
const course = courses[0];
console.log(course);
// to TheBrain text outline

brainToXML();

// brain.
// reference the Python Code
