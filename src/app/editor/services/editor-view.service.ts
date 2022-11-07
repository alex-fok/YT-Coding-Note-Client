import { Injectable } from '@angular/core';
import { EditorView, EditorViewConfig, lineNumbers } from '@codemirror/view';
import { EditorState } from '@codemirror/state';

const config: EditorViewConfig = {
  extensions: [lineNumbers()]
}

@Injectable({
  providedIn: 'root'
})
export class EditorViewService {
  view = new EditorView({...config});
  constructor() { }

  getView(content?: string): HTMLElement {
    if (content)
      this.view.setState(EditorState.create({doc: content, ...config}));
    return this.view.dom;
  }
}
