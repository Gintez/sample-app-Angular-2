import { Rezervation } from '../components/rezervations/rezervation';

export class DataService {
  private rezervations : Rezervation[] = [
    {
      status: 'Manual',
      arrival: '2017-01-01',
      size: '12m',
      price: 'DKK 40',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Anne Bonny',
      departure:'2017-01-01',
    },
    {
      status: 'Pending',
      arrival: '2017-01-01',
      size: '12m',
      price: 'DKK 40',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    },
    {
      status: 'Manual',
      arrival: '2017-01-01',
      size: '12m',
      price: 'DKK 40',
      bridge: 'B',
      position: '1',
      boat: 'starfighter',
      harbor:'Sejlforeningen Vikingen',
      captain: 'Luke Skywalker',
      departure:'2017-01-01',
    }
  ];
  getRezervationData() {
    return this.rezervations;
  }

}
