import { Injectable } from '@angular/core';
import { FileNameService } from 'src/app/services/file-name.service';

type fileDB = {id: number, file: string, content: string}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private fileNames!: Record<string, Record<string, string>>;
  private videoId = '';

  constructor(private fileNameService: FileNameService) { }
  async getContent(fileName: string, timeSegment: number): Promise<string> {
    if (!this.videoId) return '';
    if (!this.fileNames) await this.getFileNames();
    return this.getFile(this.fileNames[timeSegment][fileName]) || '';
  }
  updateVideoId(id: string) {
    this.videoId = id
  }
  private async getFileNames() {
    if (!this.videoId) return;
    const files = await this.fileNameService.getFileNames(this.videoId);
    const tmp:Record<string, Record<string, string>> = {};

    files.forEach(f => {
      if (!tmp[f.tSeg]) tmp[f.tSeg] = {};
      tmp[f.tSeg][f.name] = f.file;
    });
    this.fileNames = tmp;
  }
  private async getFile(fileName: string) {
    const files: fileDB[] =
      await fetch(`http://localhost:3000/files?file=${fileName}`).then(result => result.json());
    return files[0]?.content;
  }
}
