import { Pipe, PipeTransform } from '@angular/core';

const DAY = 86400;

@Pipe({
  name: 'secInHMS'
})
export class SecInHMSPipe implements PipeTransform {

  transform(value: number): string {
    let day = 0;
    day = Math.trunc(value / DAY);
    value = Math.trunc(value % DAY);
    const HHMMSS = new Date(value * 1000).toISOString().substring(11, 19);
    return day > 0 ? `${day}:${HHMMSS}` : HHMMSS;
  }

}
