import { Injectable } from '@angular/core';
import { distinctUntilChanged, Subject } from 'rxjs';
import type { VideoDB } from 'types/videoInfo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {
  private videoId$ = new Subject<string>();
  private videoInfo$ = new Subject<VideoDB>();
  constructor() {
    this.videoId$.pipe(distinctUntilChanged()).subscribe(id => this.updateVideoInfo(id))
  }
  async updateVideoInfo(id: string) {
    const vidInfo:VideoDB | undefined = await
      fetch(`${environment.host}/videos?videoId=${id}`)
      .then(resp => resp.json())
      .then(arr => arr[0])
      .catch(err => {console.error(err)})

    if (vidInfo)
      this.videoInfo$.next(vidInfo)
  }
  getVideoInfoSubject() {
    return this.videoInfo$
  }
}
