import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { TheBrain8, Thought } from './lib/TheBrain8';

export function brainToXML() {
  const brain = new TheBrain8();

  const thought = new Thought();
  thought.guid = uuidv4();
  thought.label = 'Thought Label';
  thought.name = 'Thought Title';
  const nowInString = (moment(new Date())).format('yyyy-MM-dd HH:mm:ss.SSS');
  thought.creationDateTime = nowInString;
  thought.realModificationDateTime = nowInString;
  brain.thoughts = [];
  brain.thoughts.push(thought);

// const courseXML = js2xml(course, {compact:false})
//
// const xml = js2xml({ a:1, b:2}, {compact: false})
//
// console.log(xml)
// console.log(courseXML)
}
