import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListPanelComponent } from './file-list-panel/file-list-panel.component';

@NgModule({
  declarations: [
    FileListPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileListPanelComponent
  ]
})
export class FileListModule { }
