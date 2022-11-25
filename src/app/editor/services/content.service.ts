import { Injectable } from '@angular/core';
import type { FileContent } from 'types/fileContent';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // itemId : content
  private fileStore: Record<string, string> = {};

  constructor() { }
  async getContent(itemId: string): Promise<string> {
    const content = this.fileStore[itemId] || await this.getFile(itemId);
    return content || '';
  }
  private async getFile(itemId: string) {
    const files: FileContent[] =
      await fetch(`http://localhost:3000/files?id=${itemId}`).then(result => result.json());

    this.fileStore[itemId] = files[0]?.content;
    return files[0]?.content;
  }
}
