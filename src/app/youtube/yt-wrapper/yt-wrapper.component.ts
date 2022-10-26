import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yt-wrapper',
  templateUrl: './yt-wrapper.component.html',
  styleUrls: ['./yt-wrapper.component.scss']
})
export class YtWrapperComponent implements OnInit {
  current = 0;
  constructor() { }

  ngOnInit(): void {
  }
  updateCurrent(value: number) {
    this.current = Math.trunc(value)
  }
}
