import { Injectable } from '@angular/core';
import { EditorView, EditorViewConfig, lineNumbers, highlightActiveLineGutter } from '@codemirror/view';
import { EditorState } from '@codemirror/state';

const config: EditorViewConfig = {
  extensions: [
    lineNumbers(),
    highlightActiveLineGutter()
  ]
}

@Injectable({
  providedIn: 'root'
})
export class EditorViewService {
  view = new EditorView({...config});
  
  constructor() {
    this.view.dom.style.height = '100%';
  }

  getView(content?: string): HTMLElement {
    if (content)
      this.view.setState(EditorState.create({doc: content, ...config}));
    return this.view.dom;
  }
}
