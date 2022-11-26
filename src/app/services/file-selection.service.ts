import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FileStructService } from './file-struct.service';

import type { FileDB } from 'types/videoInfo';

@Injectable({
  providedIn: 'root'
})
export class FileSelectionService {
  fileViewedId = '';
  fileViewed$ = new Subject<FileDB>();
  dirSelected$ = new Subject<string>();
  filesOpened: FileDB[] = []
  filesOpened$ = new Subject<FileDB[]>();
  
  constructor(private fileStructService: FileStructService) {
    this.fileStructService.getFileStructSubject().subscribe(fileStruct => {
      this.filesOpened = this.filesOpened.map(({id}) => fileStruct[id] as FileDB);
      this.filesOpened$.next(this.filesOpened);

      if (this.fileViewedId) {
        const file = fileStruct[this.fileViewedId] as FileDB;
        this.fileViewedId = file.id;
        this.fileViewed$.next(file);
      }
    })
  }
  getDirSelectedSubject() {
    return this.dirSelected$;
  }
  getFileViewedSubject() {
    return this.fileViewed$;
  }
  getFilesOpenedSubject() {
    return this.filesOpened$;
  }
  updateDirSelected(id: string) {
    const obj = this.getDBObj(id)
    this.dirSelected$.next(id)
    
    if (obj.type === 'file') {
      this.fileViewedId = obj.id;
      this.fileViewed$.next(obj);
    }
  }
  addFile(id: string) {
    const obj = this.getDBObj(id);
    if (obj.type !== 'file') return;
    // typeof obj -> FileDB
    if (!this.filesOpened.find(file => file.id === obj.id)) {
      this.filesOpened.push(obj);
      this.filesOpened$.next(this.filesOpened);
    }
    this.fileViewedId = obj.id;
    this.fileViewed$.next(obj);
  }
  removeFile(id: string) {
    this.filesOpened = this.filesOpened.filter(file => file.id !== id);
  }
  private getDBObj(id: string) {
    return this.fileStructService.getFileSysDBObj(id);
  }
}
