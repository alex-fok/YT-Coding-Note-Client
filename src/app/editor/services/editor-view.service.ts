import { Injectable } from '@angular/core';
import { EditorView, EditorViewConfig, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { EditorState } from '@codemirror/state';

const darkTheme = EditorView.theme({
  "&": {
    color: "white",
    backgroundColor: "#212121",
    height: '100%'
  },
  "&.cm-focused": {
    outline: 'none !important'
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#6c6c6c"
  },
  ".cm-gutters": {
    backgroundColor: "#212121",
    color: "#d0d0d0",
    padding: "0rem 1rem"
  },
  ".cm-activeLine": {
    backgroundColor: "#3c3c3c"
  }
}, {dark: true})

const config: EditorViewConfig = {
  extensions: [
    lineNumbers(),
    highlightActiveLine(),
    darkTheme
  ]
}

@Injectable({
  providedIn: 'root'
})
export class EditorViewService {
  view = new EditorView({...config});
  
  constructor() { }

  getView(content?: string): HTMLElement {
    if (content !== undefined)
      this.view.setState(EditorState.create({doc: content, ...config}));
    return this.view.dom;
  }
}
