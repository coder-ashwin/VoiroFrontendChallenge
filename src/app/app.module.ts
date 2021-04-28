import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { DragDropDirective } from './modal/drag-drop.directive';
import { FileNamePipe } from './file-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    DragDropDirective,
    FileNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }