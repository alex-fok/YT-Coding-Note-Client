import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { EditorUiComponent } from './editor-ui/editor-ui.component';
import { FileTabsComponent } from './file-tabs/file-tabs.component';

@NgModule({
  declarations: [
    CodeEditorComponent,
    EditorUiComponent,
    FileTabsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EditorUiComponent
  ]
})
export class EditorModule { }
