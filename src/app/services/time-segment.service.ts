import { Injectable } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeSegmentService {
  private allTimeSegments = [0, 20, 40, 60];
  private curr = { time: 0, segIdx: 0 }
  private updater$ = new Subject<number>();
  private pipedUpdater$ = this.updater$.pipe(distinctUntilChanged());
  private segment$ = new Subject<number>();

  constructor() {
    this.pipedUpdater$.subscribe((t) => this.updateCurr(t))
  }
  update(timeVal: number) {
    this.updater$.next(timeVal)
  }
  getSegIdxSubject() {
    return this.segment$
  }
  private findNearest(timeVal: number): number {
    for (let i = 0; i < this.allTimeSegments.length - 1; i++)
      if (timeVal < this.allTimeSegments[i + 1] && timeVal >= this.allTimeSegments[i])
        return i;
    return this.allTimeSegments.length - 1;
  }
  private findIdx(timeVal: number) {
    const isInterrupted = ![this.curr.time, this.curr.time + 1].includes(timeVal);
    const isNext = 
      // Is not last segment
      this.curr.segIdx !== this.allTimeSegments.length - 1 &&
      // Is within next segment
      this.allTimeSegments[this.curr.segIdx + 1] <= timeVal;

    // If is interrupted, find nearest timestamp < timeVal;
    // Else if timeVal is in next segment, increment segment index;
    return isInterrupted ? 
      this.findNearest(timeVal) :
      isNext ?
        this.curr.segIdx + 1 :
        this.curr.segIdx;
  }
  private updateCurr(timeVal: number) {
    const idx = this.findIdx(timeVal);
    if (idx !== this.curr.segIdx)
      this.segment$.next(this.allTimeSegments[idx]);
    
    this.curr = { time: timeVal, segIdx: idx };
  }
}
