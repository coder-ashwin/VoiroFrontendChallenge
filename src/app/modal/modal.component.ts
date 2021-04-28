import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform } from '../image-cropper/interfaces/index';
import { animate, state, style, transition, trigger } from '@angular/animations';
// import { ToastService } from "../toast";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: 0, overflow: 'hidden', opacity: 0, visibility: 'hidden', margin: '0px', padding: '0px' })),
      state('true', style({ overflow: 'hidden' })),
      transition('false <=> true', animate('300ms ease-in-out'))
    ])
  ]
})

export class ModalComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  @Output() showChange = new EventEmitter<void>();
  @Output() file = new EventEmitter<any>();
  imageShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    if (!this.imageShow) {
      this.showChange.emit();
    }
  }

  fileChangeEvent(event: any): void {
    this.imageShow = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  reUpload(event) {
    this.imageShow = false;
    event.value = "";
  }

  cancel(event) {
    this.showChange.emit();
    this.reUpload(event);
  }

  save(event) {
    if (this.imageShow) {
      var send = {
        src: this.croppedImage,
        name: this.imageChangedEvent.target.files[0].name
      };

      this.file.emit(send);
      this.cancel(event);
    }
  }
}