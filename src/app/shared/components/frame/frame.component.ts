import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.sass']
})
export class FrameComponent {
  @Input() title = '...';
  constructor() { }
}
