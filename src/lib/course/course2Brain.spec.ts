import test, { ExecutionContext } from 'ava';
import {TheBrain8} from "../brain/model/TheBrain8";
import {Thought} from "../brain/model/Thought";
import {getSampleCourse} from "./course2Brain";

test('course2brain', (t: ExecutionContext) => {
  const course = getSampleCourse();

  const brain = new TheBrain8();

  brain.addThought(new Thought(course.title, course.url))

  for ()

  t.true(true);
});
