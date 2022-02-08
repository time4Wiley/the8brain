import test, { ExecutionContext } from 'ava';

import { TheBrain8 } from '../brain/model/TheBrain8';
import { Thought } from '../brain/model/Thought';

import { getSampleCourse } from './course2Brain';

test('course2brain', (t: ExecutionContext) => {
  const course = getSampleCourse();

  const brain = new TheBrain8();

  const courseTitle = course.title;
  const courseURL = course.url;

  const courseThought = brain.addThoughtWithTitleLabelURL(
    courseTitle,
    '',
    courseURL
  );

  const lastSectionThought: Thought = null;
  const currentSectionThought: Thought = null;

  for (const section of course.sections) {
    const sectionThought = brain.addThoughtWithTitle(section.title);

    brain.linkParentToChild(courseThought, sectionThought);

    if (lastSectionThought && currentSectionThought) {
      brain.jumpLink(lastSectionThought, currentSectionThought);
    }

    // TODO: link from course to section
    // TODO: jump link between sections

    for (const lecture of section.lectures) {
      brain.addThoughtWithTitleLabelURL(lecture.title, '', lecture.url);
    }
  }

  t.true(true);
});
