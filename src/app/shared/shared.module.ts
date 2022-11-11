import { NgModule } from '@angular/core';
import { SecInHMSPipe } from './pipes/sec-in-hms.pipe';
import { FrameComponent } from './components/frame/frame.component';

@NgModule({
  declarations: [
    SecInHMSPipe,
    FrameComponent
  ],
  exports: [
    SecInHMSPipe,
    FrameComponent
  ]
})

export class SharedModule { }
