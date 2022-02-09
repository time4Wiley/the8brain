import { spawn } from 'child_process';

import moment from 'moment';

export function pbCopy(data: string) {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}

export function getNowInTheBrainStringFormat() {
  return moment(new Date()).format('yyyy-MM-DD HH:mm:ss.SSS') + ' @+0800';
}

export function sleep(milliseconds: number) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export function isJsonString(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
