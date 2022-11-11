import { Component, OnInit } from '@angular/core';
import { TimeSegmentService } from 'src/app/services/time-segment.service';

@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor-ui.component.html',
  styleUrls: ['./editor-ui.component.sass']
})
export class EditorUiComponent implements OnInit {
  timeSegment = 0;
  selected = 'default';

  constructor(private timeSegmentService: TimeSegmentService) { }

  ngOnInit(): void {
    this.timeSegmentService.getSegIdxSubject().subscribe(t => {
      this.timeSegment = t
    })
  }
}
