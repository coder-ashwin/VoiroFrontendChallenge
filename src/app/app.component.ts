import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0, visibility: 'hidden' })),
      state('true', style({ opacity: 1 })),
      transition('false <=> true', animate('200ms ease-in-out'))
    ])
  ]
})

export class AppComponent {
  modalShow = false;
  src: any;
  name: string;

  openModal() {
    this.modalShow = true;
  }

  closeModal() {
    this.modalShow = false;
  }

  file(event) {
    this.src = event.src;
    this.name = event.name;
  }
}