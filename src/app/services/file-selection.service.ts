import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileSelectionService {
  fileSelected$ = new Subject<string>();
  constructor() { }   

  getFileSelectedSubject() {
    return this.fileSelected$;
  }
  updateFileSelected(id: string) {
    this.fileSelected$.next(id)
  }
}
