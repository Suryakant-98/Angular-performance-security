import { Component } from '@angular/core';
import { CountryState } from '../model/countrystate.model';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent {

  countryList: CountryState[]=[];
  stateList: CountryState[]=[];

  constructor() {} 

}
