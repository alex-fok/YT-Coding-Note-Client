import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class IconComponent {
  @Input() width?: string = '1rem';
  @Input() height?: string = '1rem';
  @Input() fill?: string = 'white';
  @Input() class?: string = '';
  @Input() name: string = 'x';
  constructor() {}
}
