import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { YtWrapperComponent } from './yt-wrapper/yt-wrapper.component';
import { YtVideoComponent } from './yt-video/yt-video.component';
import { SecInHMSPipe } from '../shared/pipes/sec-in-hms.pipe';

@NgModule({
  declarations: [
    YtWrapperComponent,
    YtVideoComponent,
    SecInHMSPipe
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    YtWrapperComponent
  ]
})
export class YoutubeModule { }
