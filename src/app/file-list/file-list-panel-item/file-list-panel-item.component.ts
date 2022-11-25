import { Component, OnInit, Input } from '@angular/core';
import { FileDirectoryService } from 'src/app/services/file-directory.service';
import { FileSelectionService } from 'src/app/services/file-selection.service';
import type { FileSysObj } from 'types/videoInfo'

@Component({
  selector: 'app-file-list-panel-item',
  templateUrl: './file-list-panel-item.component.html',
  styleUrls: ['./file-list-panel-item.component.sass']
})
export class FileListPanelItemComponent implements OnInit {
  @Input() id = '';
  @Input() type = 'file';
  @Input() name = '';
  isFile = true;
  isSelected = false;
  subDirs:FileSysObj[] = [];

  constructor(
    private fileDirService: FileDirectoryService,
    private fileSelectionService: FileSelectionService
  ) { }

  ngOnInit(): void {
    const subDirs: FileSysObj[] | undefined = this.fileDirService.getSubDirs(this.id);
    this.update(subDirs);
    this.fileDirService.getDirTreeSubject().subscribe(subDirs => {
      this.update(subDirs[this.id]);
    })
    this.fileSelectionService.getDirSelectedSubject().subscribe(id => {
      this.isSelected = this.id === id ? true : false;
    }) 
  }
  selectDir() {
    this.fileSelectionService.updateDirSelected(this.id);
  }
  addFile() {
    if (!this.isFile) return;
    this.fileSelectionService.addFile(this.id);
  }
  private update(subDirs: FileSysObj[]) {
    [this.subDirs, this.isFile] = subDirs ? [subDirs, false] : [[], true]; 
  }
  printName() {
    return this.isFile ? this.name : this.name + '/'
  }
}
