import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { EditorView, lineNumbers } from '@codemirror/view';
import { Subject } from 'rxjs';
import { EditorState } from '@codemirror/state';
import { EditorViewService } from '../services/editor-view.service';

const defaultExt = { extensions: [lineNumbers()] }

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  private view!: HTMLElement;
  private contentUpdater$ = new Subject<string>();
  @ViewChild('editorContainer', {static: false}) container!: ElementRef;
  
  @Input()
  get fileName(): string { return this._fileName };
  set fileName(fname: string) {
    this._fileName = fname;
    this.contentUpdater$.next(fname);
  };
  private _fileName: string = '';
   
  constructor(
    private contentService: ContentService,
    private editorViewService: EditorViewService,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.contentUpdater$.subscribe(fileName => {
      const content = this.contentService.getContent(fileName);
      this.editorViewService.getView(content);
    });
    this.contentUpdater$.next(this.fileName);
  }

  ngAfterViewInit(): void {
    this.view = this.editorViewService.getView();
    this.renderer.appendChild(this.container.nativeElement, this.view);
  }
}
