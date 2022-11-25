export interface FileSysObj {
  id: string,
  type: 'file' | 'folder' | 'root',
  name: string,
}

interface FSDBObj extends FileSysObj {
  parent: string
}

export interface FileDB extends FSDBObj {
  type: 'file',
  itemId: string
};

interface FolderDB extends FSDBObj {
  type: 'folder',
  subDirs: string[]
};

interface RootDB extends FSDBObj {
  type: 'root',
  subDirs: string[]
}
export type FileSysDBObj = FileDB | FolderDB | RootDB;
// fileId: FileSysDBObj
export type FileStruct = Record<string, FileSysDBObj>;
// timestamp: FileStruct
export type FileStructHist = Record<string, FileStruct>;
export interface VideoDB {
  id: number,
  videoId: string,
  fileStruct: FileStructHist
}
