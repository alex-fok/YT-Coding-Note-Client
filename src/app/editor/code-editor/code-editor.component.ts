import { Component, AfterViewInit, ViewChild, Input, Renderer2, ElementRef } from '@angular/core';
import { ContentService } from '../services/content.service';
import { EditorViewService } from '../services/editor-view.service';
import { FileDB } from 'types/videoInfo';

@Component({
  selector: 'app-code-editor',
  template: ''
})
export class CodeEditorComponent implements AfterViewInit {
  @Input()
  set selectedFile(file: FileDB | null) {
    const contentPromise = file ? this.contentService.getContent(file.itemId) : new Promise<string>((resolve, _) => resolve(''));
    contentPromise.then(content => {
      this.view = this.editorViewService.getView(content)
    });
  }
  private view: HTMLElement;
  
  constructor(
    private contentService: ContentService,
    private editorViewService: EditorViewService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.view = this.editorViewService.getView();
    const resizeObserver = new ResizeObserver(entries => {
      this.view = this.editorViewService.resetHeight(entries[0].contentRect.height)
    })
    resizeObserver.observe(this.el.nativeElement)
  }
  ngAfterViewInit(): void {
    this.renderer.appendChild(this.el.nativeElement, this.view);
  }
}
