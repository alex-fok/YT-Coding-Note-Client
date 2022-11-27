import { NgModule } from '@angular/core';
import { SecInHMSPipe } from './pipes/sec-in-hms.pipe';
import { FrameComponent } from './components/frame/frame.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    SecInHMSPipe,
    FrameComponent,
    IconComponent
  ],
  exports: [
    SecInHMSPipe,
    FrameComponent,
    IconComponent
  ]
})

export class SharedModule { }
