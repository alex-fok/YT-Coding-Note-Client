import { Component, AfterViewInit, ViewChild, Input, Renderer2, ElementRef } from '@angular/core';
import { ContentService } from '../services/content.service';
import { EditorViewService } from '../services/editor-view.service';
import { FileDB } from 'types/videoInfo';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent implements AfterViewInit {
  @ViewChild('editorContainer', {static: false}) container!: ElementRef;
  @Input()
  set selectedFile(file: FileDB | null) {
    if (!file) return;
    this.contentService.getContent(file.itemId)
      .then(content => {
        this.view = this.editorViewService.getView(content)
      });
  }
  private view: HTMLElement;
  
  constructor(
    private contentService: ContentService,
    private editorViewService: EditorViewService,
    private renderer: Renderer2,
  ) {
    this.view = this.editorViewService.getView();
  }
  ngAfterViewInit(): void {
    this.renderer.appendChild(this.container.nativeElement, this.view);
  }
}
