import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports: [
    EditorUiComponent
  ]
})
export class EditorModule { }
