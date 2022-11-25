import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import type { FileStruct, FileSysObj } from 'types/videoInfo';
import { FileStructService } from './file-struct.service';

type DirectoryTree = Record<string, FileSysObj[]>;
@Injectable({
  providedIn: 'root'
})
export class FileDirectoryService {
  private dirTree:DirectoryTree = {};
  private dirTree$ = new Subject<DirectoryTree>();

  constructor(private fileStructService: FileStructService) {
    this.fileStructService.getFileStructSubject().subscribe(fileStruct => {
      this.dirTree = this.getDirTree(fileStruct);
      this.dirTree$.next(this.dirTree);
    });
  }
  getDirTreeSubject() {
    return this.dirTree$;
  }
  getSubDirs(id:string) {
    return this.dirTree[id];
  }
  private getDirTree(fileStruct: FileStruct) {
    const dirTree: DirectoryTree = {};
    Object.entries(fileStruct).forEach(([dirId, fsObj]) => {
      if (fsObj.type === 'file') return;
      dirTree[dirId] = fsObj.subDirs.map(subId => {
        const subObj = fileStruct[subId];
        return {
          id: subId,
          type: subObj.type,
          name: subObj.name
        }
      });
    });
    return dirTree;
  }
}
