import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html'
})
export class VisitorListComponent {

  @Input() reservations;
  @Output() openModal = new EventEmitter();
  @Output() modalInfo = new EventEmitter();

  clicked(reservation) {
    this.openModal.emit();
    this.modalInfo.emit(reservation);
  }

}
