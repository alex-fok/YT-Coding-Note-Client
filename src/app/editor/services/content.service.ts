import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: Record<string, Record<string, string>> = {
    '0': {
      'default': 'This is the default content\ndefault-0'
    },
    '20': {
      'default': 'This is the default content\ndefault-20'
    },
    '40': {
      'default': 'This is the default content\ndefault-40',
    },
    '60': {
      'default': 'This is the default content\ndefault-60',
    }
  }
  constructor() { }

  getContent(fileName: string, timeSegment: number): string {
    
    return this.content[timeSegment][fileName] || ''
  }
}
