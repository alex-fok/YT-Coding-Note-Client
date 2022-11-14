import { Component, OnInit, Input } from '@angular/core';
import { FileSelectionService } from 'src/app/services/file-selection.service';
import { FileStructService } from 'src/app/services/file-struct.service';
import type { FileSysItem } from 'types/videoinfo'

type FileSysObj = { id: string, type: 'file' | 'folder' | 'root', name: string }

@Component({
  selector: 'app-file-list-panel-item',
  templateUrl: './file-list-panel-item.component.html',
  styleUrls: ['./file-list-panel-item.component.sass']
})
export class FileListPanelItemComponent implements OnInit {
  @Input() id = '';
  @Input() type = 'file';
  @Input() name = '';
  isFolder = false;
  isSelected = false;
  children:FileSysObj[] = []

  constructor(
    private fileStructService: FileStructService,
    private fileSelectionService: FileSelectionService
  ) { }

  ngOnInit(): void {
    const children: FileSysObj[] = this.fileStructService.getChildren(this.id);
    this.update(children);
    this.fileStructService.getDirectoryTreeSubject().subscribe(children => {
      this.update(children[this.id])
    })
    this.fileSelectionService.getFileSelectedSubject().subscribe(id => {
      console.log(`Compare ${this.id} and ${id}`)
      this.isSelected = this.id === id ? true : false
    }) 
  }
  selectFile() {
    this.fileSelectionService.updateFileSelected(this.id) 
  }
  private update(children: FileSysObj[]) {
    [this.children, this.isFolder] = children ? [children, true] : [[], false]; 
  }

}

