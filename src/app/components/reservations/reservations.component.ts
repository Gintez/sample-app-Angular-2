import { Component, ViewChild } from '@angular/core';
import { ModalComponent} from '../modal/modal.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
  constructor (private dataService: DataService) {};

  reservations = this.dataService.getReservationData();
  reservationObj;
}
