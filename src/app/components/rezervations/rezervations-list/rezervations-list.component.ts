import { Component } from '@angular/core';
import { Rezervation } from '../rezervation';

@Component({
  selector: 'app-rezervations-list',
  templateUrl: './rezervations-list.component.html',
  styleUrls: ['./rezervations-list.component.css']
})
export class RezervationsListComponent {
  rezervations: Rezervation[] = [
    {
      status:'Manual',
      arrival: '2017-01-01',
      departure:'2017-01-01',
      size: '12m',
      price: 'DKK 40'
    },
    {
      status:'Pending',
      arrival: '2017-01-01',
      departure:'2017-01-01',
      size: '12m',
      price: 'DKK 40'
    },
    {
      status:'Manual',
      arrival: '2017-01-01',
      departure:'2017-01-01',
      size: '12m',
      price: 'EUR 10'
    }
  ]

}
