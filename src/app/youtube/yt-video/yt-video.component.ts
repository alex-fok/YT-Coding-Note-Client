/// <reference types="youtube" />
import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
 
let isReady = false;
/// <reference type='youtube'>
@Component({
  selector: 'app-yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.css']
})

export class YtVideoComponent implements OnInit {
  player : YT.Player | undefined;
  constructor() { }
  
  ngOnInit(): void {
    if (!isReady) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag)
      isReady = true
    }    
  }
  
  onReady(event: YT.PlayerEvent): void {
    this.player = event.target
  }
}
