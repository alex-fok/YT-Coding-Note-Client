import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListPanelComponent } from './file-list-panel/file-list-panel.component';
import { FileListPanelItemComponent } from './file-list-panel-item/file-list-panel-item.component';

@NgModule({
  declarations: [
    FileListPanelComponent,
    FileListPanelItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileListPanelComponent
  ]
})
export class FileListModule { }
