import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class IconComponent {
  @Input() width?: number;
  @Input() height?: number;
  @Input() fill?: string = 'white';
  @Input() class?: string = '';
  @Input() name: string = '';
  constructor() {
    this.width = this.width ? this.width : 1
    this.height = this.height ? this.height: 1
  }
}
