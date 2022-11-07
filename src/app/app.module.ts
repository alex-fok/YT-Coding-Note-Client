import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubeModule } from './youtube/youtube.module';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubeModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
