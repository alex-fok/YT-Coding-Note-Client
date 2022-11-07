import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { EditorUiComponent } from './editor-ui/editor-ui.component';

@NgModule({
  declarations: [
    CodeEditorComponent,
    EditorUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorUiComponent 
  ]
})
export class EditorModule { }
