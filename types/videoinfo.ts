interface FSItem {
  id: string,
  type: 'file' | 'folder' | 'root',
  name: string,
  parent: string
}

interface FileDB extends FSItem {
  type: 'file',
  file: string
};

interface FolderDB extends FSItem {
  type: 'folder',
  children: string[]
};

interface RootDB extends FSItem {
  type: 'root',
  children: string[]
}
export type FileSysItem = FileDB | FolderDB | RootDB;
export type FileStruct = Record <string, Record<string, FileSysItem>>;
export interface VideoDB {
  id: number,
  videoId: string,
  fileStruct: FileStruct
}
