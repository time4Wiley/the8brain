import 'reflect-metadata';
import { spawn } from 'child_process';
import fs from 'fs'


import {plainToClass } from "class-transformer";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { js2xml } from "xml-js";

import { Course } from "./lib/Course";
import { TheBrain8, Thought } from "./lib/TheBrain8";




const dataArray = JSON.parse(fs.readFileSync("/Users/wei/Lobby/ZTM2Brain/src/data/ztm.sample.json", "utf-8"));

function pbCopy(data:string) {
  const proc = spawn('pbcopy');
  proc.stdin.write(data); proc.stdin.end();
}

pbCopy('test string')

const courses = plainToClass(Course, [dataArray]);
const course = courses[0];

// to TheBrain text outline

const brain = new TheBrain8()

const thought = new Thought();
thought.guid = uuidv4()
thought.label = "Thought Label"
thought.name = "Thought Title"
const nowInString = (moment(new Date())).format('yyyy-MM-dd HH:mm:ss.SSS');
thought.creationDateTime = nowInString
thought.realModificationDateTime = nowInString
brain.thoughts = []
brain.thoughts.push(thought)

const courseXML = js2xml(course, {compact:false})

const xml = js2xml({ a:1, b:2}, {compact: false})

console.log(xml)
console.log(courseXML)

// brain.
// reference the Python Code

