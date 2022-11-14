import { Injectable } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';
import type { VideoDB } from 'types/videoinfo';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {
  private videoId$ = new Subject<string>();
  private videoInfoSubject$ = new Subject<VideoDB>();
  constructor() {
    this.videoId$.pipe(distinctUntilChanged()).subscribe(id => this.updateVideoInfo(id))
  }
  async updateVideoInfo(id: string) {
    const vidInfo:VideoDB | undefined = await
      fetch(`http://localhost:3000/videos?videoId=${id}`)
      .then(resp => resp.json())
      .then(arr => arr[0])
      .catch(err => {console.error(err)})

//    console.log(vidInfo)
    if (vidInfo)
      this.videoInfoSubject$.next(vidInfo)
  }
  getVideoInfoSubject() {
    return this.videoInfoSubject$
  }
}
