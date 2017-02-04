import { Reservation } from '../components/reservations/reservation';

export class DataService {
  private reservations : Reservation[] = [
    {
      status: 'Manual',
      arrival: '2017-01-01',
      size: '12m',
      price: '10',
      currency: 'EUR',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Anne Bonny',
      departure:'2017-01-15',
    },
    {
      status: 'Pending',
      arrival: '2017-01-01',
      size: '12m',
      price: '40',
      currency: 'DKK',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    },
    {
      status: 'Manual',
      arrival: '2017-01-02',
      size: '12m',
      price: '40',
      currency: 'DKK',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    },
    {
      status: 'Manual',
      arrival: '2017-01-02',
      size: '12m',
      price: '40',
      currency: 'DKK',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    },
    {
      status: 'Manual',
      arrival: '2017-01-02',
      size: '12m',
      price: '40',
      currency: 'DKK',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    },
    {
      status: 'Pending',
      arrival: '2017-01-01',
      size: '12m',
      price: '10',
      currency: 'EUR',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Anne Bonny',
      departure:'2017-01-15',
    }
  ];
  getReservationData() {
    return this.reservations;
  }

}
