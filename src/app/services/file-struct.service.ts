import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VideoInfoService } from './video-info.service';
import { TimeSegmentService } from './time-segment.service';
import type { FileSysDBObj, FileStructHist } from 'types/videoInfo';

@Injectable({
  providedIn: 'root'
})
export class FileStructService {
  private fileStructHist: FileStructHist = {};
  private fileStruct$ = new Subject<Record<string, FileSysDBObj>>();
  private currTime: number = 0;

  constructor(
    private videoInfoService: VideoInfoService,
    private timeSegmentService: TimeSegmentService
  ) {
    this.timeSegmentService.getSegSubject().subscribe(t => {
      this.updateTimeSegment(t);
    })
    this.videoInfoService.getVideoInfoSubject().subscribe(vidInfo => {
      this.updateFileStruct(vidInfo.fileStruct);
    })
  }
  getFileStructSubject() {
    return this.fileStruct$;
  }
  getFileSysDBObj(id: string): FileSysDBObj {
   return this.fileStructHist[this.currTime][id];
  }
  updateFileStruct(fileStructHist: FileStructHist) {
    this.fileStructHist = fileStructHist;
    this.updateTimeSegment(0);
  }
  updateTimeSegment(t: number) {
    this.fileStruct$.next(this.fileStructHist[t]);
    this.currTime = t;
  }
}
