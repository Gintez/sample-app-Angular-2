import { Component } from '@angular/core';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})

export class VisitorListComponent {
  visitors: Visitor[] = [
  {
    berth:'B-1',
    boat: 'starfighter',
    harbor:'Sejlforeningen Vikingen',
    captain: 'Luke Skywalker',
    departure: '2017-01-31'
  },
  {
    berth:'B-1',
    boat: 'Anne',
    harbor:'Sejlforeningen Vikingen',
    captain: 'Anne Bonny',
    departure: '2017-01-31'
  },
  {
    berth:'B-1',
    boat: 'Anne',
    harbor:'Sejlforeningen Vikingen',
    captain: 'Anne Bonny',
    departure: '2017-01-31'
  }];
}
