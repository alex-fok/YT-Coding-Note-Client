import { Component, OnInit, HostListener } from '@angular/core';
import { FileDirectoryService } from 'src/app/services/file-directory.service';

type FileSysObj = {id: string, type: 'file' | 'folder' | 'root', name: string}

@Component({
  selector: 'app-file-list-panel',
  templateUrl: './file-list-panel.component.html',
  styleUrls: ['./file-list-panel.component.sass']
})
export class FileListPanelComponent implements OnInit {
  rootFiles: FileSysObj[] = [];
  minWidth: number = 0;
  constructor(private fileDirService: FileDirectoryService) { }

 ngOnInit(): void {
    this.fileDirService.getDirTreeSubject().subscribe(tree => {
      this.rootFiles = tree['/'] || []
    })
    this.getPanelMinWidth()
  }
  @HostListener('window:resize')
  getPanelMinWidth() {
    this.minWidth = window.innerWidth / 10
  }
}
