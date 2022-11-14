import { Component, OnInit } from '@angular/core';
import { FileStructService } from 'src/app/services/file-struct.service';

type FileSysObj = {id: string, type: 'file' | 'folder' | 'root', name: string}

@Component({
  selector: 'app-file-list-panel',
  templateUrl: './file-list-panel.component.html',
  styleUrls: ['./file-list-panel.component.sass']
})
export class FileListPanelComponent implements OnInit {
  rootFiles: FileSysObj[] = [];
  constructor(private fileStructService: FileStructService) { }

 ngOnInit(): void {
    const rootFiles = this.fileStructService.getChildren('/') || [];
    this.rootFiles = rootFiles;
    this.fileStructService.getDirectoryTreeSubject().subscribe(tree => {
      console.log(tree['/'])
      this.rootFiles = tree['/'] || []
    })
  }
}
