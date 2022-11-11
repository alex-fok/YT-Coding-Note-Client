import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Subject } from 'rxjs';
import { EditorViewService } from '../services/editor-view.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editorContainer', {static: false}) container!: ElementRef;
  
  @Input()
  get timeSegment(): number { return this._timeSegment; }
  set timeSegment(t: number) {
    this._timeSegment = t;
    this.viewUpdater$.next({
      fileName: this._fileName,
      timeSegment: this._timeSegment
    });
  } 
  @Input()
  get fileName(): string { return this._fileName };
  set fileName(fname: string) {
    this._fileName = fname;
    this.viewUpdater$.next({
      fileName: fname,
      timeSegment: this._timeSegment
    });
  };
  private view: HTMLElement;
  private viewUpdater$ = new Subject<{fileName: string, timeSegment: number}>();
  private _timeSegment = 0;
  private _fileName = '';
  
  constructor(
    private contentService: ContentService,
    private editorViewService: EditorViewService,
    private renderer: Renderer2,
  ) {
    this.view = this.editorViewService.getView();
  }
  ngOnInit(): void {
    this.viewUpdater$.subscribe(async({fileName, timeSegment}) => {
      const content = await this.contentService.getContent(fileName, timeSegment);
      this.view = this.editorViewService.getView(content);
    });
    this.viewUpdater$.next({
      fileName: this._fileName,
      timeSegment: this._timeSegment
    });
  }
  ngAfterViewInit(): void {
    this.renderer.appendChild(this.container.nativeElement, this.view);
  }
}
