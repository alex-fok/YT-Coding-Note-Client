import { Component, OnInit } from '@angular/core';
import { FileSelectionService } from 'src/app/services/file-selection.service';
import { FileDB } from 'types/videoInfo';

@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.sass']
})
export class EditorUiComponent implements OnInit {
  selectedFile: FileDB | null = null
  constructor(private fileSelectionService: FileSelectionService) { }
  
  ngOnInit(): void {
    this.fileSelectionService.getFileViewedSubject().subscribe(file => {
      this.selectedFile = file;
    })
  }
  selectFile(fileId: string) {
    this.fileSelectionService.updateDirSelected(fileId);
  }
}
