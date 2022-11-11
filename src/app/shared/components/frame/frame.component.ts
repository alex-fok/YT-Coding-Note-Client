import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'layout-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.sass']
})
export class FrameComponent implements OnInit {
  @Input() title = '...';
  constructor() { }

  ngOnInit(): void {
  }

}
