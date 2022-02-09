export function checkIsCourseJsonString(
  jsonString: string
): [isCourse: boolean, json: any] {
  const courseJsonFromChrome = JSON.parse(jsonString);

  const isCourse =
    courseJsonFromChrome['meta'] && courseJsonFromChrome['title'];
  return [isCourse, isCourse ? courseJsonFromChrome : null];
}
