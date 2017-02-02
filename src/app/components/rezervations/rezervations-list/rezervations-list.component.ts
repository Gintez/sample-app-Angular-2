import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-rezervations-list',
  templateUrl: './rezervations-list.component.html',
  styleUrls: ['./rezervations-list.component.css']
})
export class RezervationsListComponent {
  constructor (private dataService: DataService) {};

  rezervations = this.dataService.getRezervationData();

}
