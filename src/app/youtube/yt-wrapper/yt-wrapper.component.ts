import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/editor/services/content.service';
import { TimeSegmentService } from 'src/app/services/time-segment.service';

@Component({
  selector: 'app-yt-wrapper',
  templateUrl: './yt-wrapper.component.html',
  styleUrls: ['./yt-wrapper.component.sass']
})
export class YtWrapperComponent implements OnInit {
  timeSegment = 0;
  videoId = 'M7lc1UVf-VE'
  constructor(
    public timeSegmentService: TimeSegmentService,
    public contentService: ContentService) { }

  ngOnInit(): void {
    this.timeSegmentService.getSegIdxSubject().subscribe(t => this.timeSegment = t)
    this.contentService.updateVideoId(this.videoId)
  }
  updateCurrent(value: number) {
    this.timeSegmentService.update(value)
  }
}
