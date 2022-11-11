import { Injectable } from '@angular/core';

type fileDB = {id: number, file: string, content: string};
type fileNameDB = {id: number, name: string, file: string, tSeg: number};
type videoDB = {id: number, files: fileDB[], fileNames:fileNameDB[]}

@Injectable({
  providedIn: 'root'
})
export class FileNameService {

  constructor() { }

  async getFileNames(id: string): Promise<fileNameDB[]> {
    const result:videoDB[] =
      await fetch(`http://localhost:3000/videos?videoId=${id}`).then(results => results.json());
    return result[0]?.fileNames || [];
  }
}
