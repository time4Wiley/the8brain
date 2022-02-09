import { Type } from 'class-transformer';

export class Lecture {
  constructor(public url: string, public title: string) {}
}

export class Section {
  @Type(() => Lecture)
  public lectures: Lecture[];

  constructor(public title: string) {
    this.lectures = [];
  }

  addLecture(lecture: Lecture) {
    this.lectures.push(lecture);
  }
}

export class Course {
  @Type(() => Section)
  public sections: Section[];
  public meta: ICourseMeta = {};

  constructor(public title: string, public url: string) {
    this.sections = [];
  }

  addSection(section: Section) {
    this.sections.push(section);
  }

  toTextOutline(): string {
    const suffix = ', ZTM';

    const textOutlines: string[] = [];

    for (const section of this.sections) {
      textOutlines.push(section.title + suffix);
      for (const lecture of section.lectures) {
        textOutlines.push('\t' + lecture.title + suffix);
        textOutlines.push('\t\t' + '+ ' + lecture.url);
      }
    }

    return textOutlines.join('\n');
  }
}

export interface ICourseMeta {
  brand?: string;
  abbrev?: string;
}
