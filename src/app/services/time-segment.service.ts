import { Injectable, OnInit } from '@angular/core';
import { distinctUntilChanged,  Observable,  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeSegmentService {
  private allTimeSegments = [0, 20, 40, 60];
  private currTime = 0;
  private currSegIdx = 0;
  private updater$ = new Subject<number>();
  private pipedUpdater = this.updater$.pipe(distinctUntilChanged());
  currSegment = 0;

  constructor(
  ){
    this.pipedUpdater.subscribe((t) => this.updateCurr(t))
  }
  update(timeVal: number) {
    this.updater$.next(timeVal)
  }
  private findNearest(timeVal: number): number {
    for (let i = 0; i < this.allTimeSegments.length - 1; i++)
      if (timeVal < this.allTimeSegments[i + 1] && timeVal >= this.allTimeSegments[i])
        return i;
    return this.allTimeSegments.length - 1;
  }
  private findIdx(timeVal: number) {
    const isInterrupted = ![this.currTime, this.currTime + 1].includes(timeVal);
    const isNext = 
      // Is not last segment
      this.currSegIdx !== this.allTimeSegments.length - 1 &&
      // Is within next segment
      this.allTimeSegments[this.currSegIdx + 1] <= timeVal;

    // If is interrupted, find nearest timestamp < timeVal;
    // Else if timeVal is in next segment, increment segment index;
    return isInterrupted ? 
      this.findNearest(timeVal) :
      isNext ?
        this.currSegIdx + 1 :
        this.currSegIdx;
  }
  private updateCurr(timeVal: number) {
    const idx = this.findIdx(timeVal);
    [this.currSegIdx, this.currSegment, this.currTime] = [idx, this.allTimeSegments[idx], timeVal]
  }
}
