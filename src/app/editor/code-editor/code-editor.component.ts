import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { EditorViewService } from '../services/editor-view.service';
import { FileSelectionService } from 'src/app/services/file-selection.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editorContainer', {static: false}) container!: ElementRef;
  private view: HTMLElement;
  
  constructor(
    private contentService: ContentService,
    private editorViewService: EditorViewService,
    private fileSelectionService: FileSelectionService,
    private renderer: Renderer2,
  ) {
    this.view = this.editorViewService.getView();
  }
  ngOnInit(): void {
    this.fileSelectionService.getFileViewedSubject().subscribe(async(selected) => {
      const content = await this.contentService.getContent(selected.itemId);
      this.view = this.editorViewService.getView(content)
    })
  }
  ngAfterViewInit(): void {
    this.renderer.appendChild(this.container.nativeElement, this.view);
  }
}
