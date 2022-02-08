import { spawn } from 'child_process';

import moment from 'moment';
export function pbCopy(data: string) {
  const proc = spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}

export function getNowInTheBrainStringFormat() {
  return moment(new Date()).format('yyyy-MM-DD HH:mm:ss.SSS');
}
