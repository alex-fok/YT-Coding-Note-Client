import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: Record<string, string> = {
    default: 'This is the default content\nLine2\nLine3'
  }
  constructor() { }

  getContent(fileName: string): string {
    return this.content[fileName] || ''
  }
}
