import { Injectable } from '@angular/core';

type fileNameDB = {id: number, name: string, file: string, tSeg: number}
type fileDB = {id: number, file: string, content: string}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private fileNames!: Record<string, Record<string, string>>;
  
  constructor() { }
  async getContent(fileName: string, timeSegment: number): Promise<string> {
    if (!this.fileNames) await this.initFileNames()
    return this.getFile(this.fileNames[timeSegment][fileName]) || ''
  }
  private async initFileNames() {
    const files: fileNameDB[] = await fetch('http://localhost:3000/fileNames').then(results => results.json());
    const tmp:Record<string, Record<string, string>> = {}
    files.forEach(f => {
      if (!tmp[f.tSeg]) tmp[f.tSeg] = {}
      tmp[f.tSeg][f.name] = f.file
    })
    this.fileNames = tmp
  }
  private async getFile(fileName: string) {
    const files: fileDB[] =
      await fetch(`http://localhost:3000/files?file=${fileName}`).then(result => result.json());
    return files[0]?.content;
  }
}
