import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VideoInfoService } from './video-info.service';
import { TimeSegmentService } from './time-segment.service';
import type { FileStruct } from 'types/videoinfo'

type DirectoryTree = Record<string, {id: string, type: 'file' | 'folder' | 'root', name: string}[]>;

@Injectable({
  providedIn: 'root'
})
export class FileStructService {
  private fileStruct: FileStruct = {};
  private fileStructSubject$ = new Subject<FileStruct>();
  private directoryTree: DirectoryTree = {};
  private directoryTreeSubject$ = new Subject<DirectoryTree>();

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
  updateFileStruct(fileStruct: FileStruct) {
    this.fileStruct = fileStruct;
    this.fileStructSubject$.next(fileStruct);
    this.updateTimeSegment(0);
  }
  updateTimeSegment(t: number) {
    const directoryTree: DirectoryTree = {};
    Object.entries(this.fileStruct[t]).forEach(([id, fsObj]) => {
      if (fsObj.type === 'file') return;
      directoryTree[id] = fsObj.children.map(childId => {
        const childObj = this.fileStruct[t][childId];
        return {
          id: childId,
          type: childObj.type,
          name: `${childObj.name}${childObj.type === 'folder' ? '/' : ''}`
        }
      });
    })
    this.directoryTree = directoryTree;
    console.log(directoryTree)
    this.directoryTreeSubject$.next(this.directoryTree)
  }
  getFileStructSubject() {
    return this.fileStructSubject$
  }
  getDirectoryTreeSubject() {
    return this.directoryTreeSubject$
  }
  getChildren(id: string) {
    return this.directoryTree[id]
  }
}
