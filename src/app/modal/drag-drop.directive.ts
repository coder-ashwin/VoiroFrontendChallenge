import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dragDrop]'
})

export class DragDropDirective {
  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = 'rgba(250,250,255,1)';

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(245,245,250,1)';
  }
  
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(250,250,255,1)';
  }
  
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'rgba(250,250,255,1)';
    let fils = evt.dataTransfer.files;
    var fil = {
      target: {
        files: fils
      }
    };

    if (fils.length > 0) {
      if (["png", "jpeg", "tiff"].includes(fils[0].type.replace("image/", ""))) {
        this.onFileDropped.emit(fil);
      }
    }
  }
}