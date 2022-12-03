import { Injectable } from '@angular/core';
import { EditorView, EditorViewConfig, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { EditorState, Compartment } from '@codemirror/state';

const compartment = new Compartment();

const darkConfig = {
  '&': {
    color: 'white',
    backgroundColor: '#212121',
  },
  '&.cm-scroller': {
    overflow: 'auto'
  },
  '&.cm-focused': {
    outline: 'none !important'
  },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#6c6c6c'
  },
  '.cm-gutters': {
    backgroundColor: '#212121',
    color: '#d0d0d0',
    padding: '0rem 1rem'
  },
  '.cm-activeLine': {
    backgroundColor: '#3c3c3c'
  }
}
const config: EditorViewConfig = {
  extensions: [
    lineNumbers(),
    highlightActiveLine(),
    compartment.of(EditorView.theme(darkConfig, {dark: true}))
  ]
}
@Injectable({
  providedIn: 'root'
})
export class EditorViewService {
  view = new EditorView({...config});
  content: string = '';
  constructor() { }

  getView(content?: string): HTMLElement {
    if (content !== undefined) {
      this.content = content;
      this.view.setState(EditorState.create({doc: content, ...config}));
    }
    return this.view.dom;
  }
  resetHeight(height: number): HTMLElement {
    const parentStyle = {'&': {...darkConfig['&'], height: height + 'px'}};
    const theme = {...darkConfig, ...parentStyle};
    this.view.dispatch({
      effects: compartment.reconfigure(EditorView.theme(theme, {dark: true}))
    })
    return this.view.dom;
  }
}
