/// <reference types="youtube" />
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';

let isReady = false;

@Component({
  selector: 'app-yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.sass']
})

export class YtVideoComponent implements OnInit, OnDestroy {
  @Input() videoId = '';
  @Output() currentUpdated = new EventEmitter<number>();  
  player: YT.Player | undefined;
  interval: NodeJS.Timer;
  width: number = 854;
  height: number = 480;

  constructor() {
    this.interval = setInterval(()=>{
      if (this.player) {
        this.currentUpdated.emit(Math.trunc(this.player.getCurrentTime()))
      }
    }, 1000)
    this.getVideoSize()
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
  @HostListener('window:resize')
  getVideoSize() {
    this.width = window.innerWidth / 2;
    this.height = this.width / 16 * 9;
  }
  onReady(event: YT.PlayerEvent): void {
    this.player = event.target
  }
}
