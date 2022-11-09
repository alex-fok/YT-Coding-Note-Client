import { NgModule } from '@angular/core';
import { SecInHMSPipe } from './pipes/sec-in-hms.pipe';

@NgModule({
  declarations: [
    SecInHMSPipe
  ],
  exports: [
    SecInHMSPipe
  ]
})

export class SharedModule { }
