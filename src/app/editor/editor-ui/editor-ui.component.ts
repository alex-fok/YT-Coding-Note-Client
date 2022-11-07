import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.scss']
})
export class EditorUiComponent implements OnInit {
  default = 'default';
  constructor() { }

  ngOnInit(): void {
  }

}
