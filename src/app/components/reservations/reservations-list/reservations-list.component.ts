import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent {

  @Input() reservations;
  @Output() openModal = new EventEmitter();
  @Output() modalInfo = new EventEmitter();

  clicked(reservation) {
    this.openModal.emit();
    this.modalInfo.emit(reservation);
  }

  isPending(status) {
    return status === 'Pending';
  }
  isManual(status) {
    return status === 'Manual';
  }

}
