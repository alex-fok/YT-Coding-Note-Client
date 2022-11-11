import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { YoutubeModule } from './youtube/youtube.module';
import { EditorModule } from './editor/editor.module';
import { FileListModule } from './file-list/file-list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    YoutubeModule,
    EditorModule,
    FileListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
