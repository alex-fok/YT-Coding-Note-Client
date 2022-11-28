import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileSelectionService } from 'src/app/services/file-selection.service';
import { FileDB } from 'types/videoInfo';

@Component({
  selector: 'app-file-tabs',
  templateUrl: './file-tabs.component.html',
  styleUrls: ['./file-tabs.component.sass']
})
export class FileTabsComponent implements OnInit {
  @Output() selectFileEvent = new EventEmitter<string>();
  filesOpened: FileDB[] = [];
  selectedId = '';

  constructor(private fileSelectionService: FileSelectionService) { }

  ngOnInit(): void {
    this.fileSelectionService.getFilesOpenedSubject().subscribe(filesOpened => {
      this.filesOpened = filesOpened
    })
    this.fileSelectionService.getFileViewedSubject().subscribe(file => {
      this.selectedId = file ? file.id : ''
    })
  }
  selectFile(id: string) {
    this.selectFileEvent.emit(id)
  }
  closeTab(id:string) {
    this.fileSelectionService.removeFile(id)
  }
}
