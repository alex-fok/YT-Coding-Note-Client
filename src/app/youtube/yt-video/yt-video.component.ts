/// <reference types="youtube" />
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

let isReady = false;

@Component({
  selector: 'app-yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.sass']
})

export class YtVideoComponent implements OnInit, OnDestroy {
  @Output() currentUpdated = new EventEmitter<number>();  
  player: YT.Player | undefined;
  interval: NodeJS.Timer;

  constructor() {
    this.interval = setInterval(()=>{
      if (this.player) {
        this.currentUpdated.emit(Math.trunc(this.player.getCurrentTime()))
      }
    }, 1000)
  }
  ngOnInit(): void {
    if (!isReady) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag)
      isReady = true
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  onReady(event: YT.PlayerEvent): void {
    this.player = event.target
  }
}
