import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
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
