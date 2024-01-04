import { Component, OnInit } from '@angular/core';
import { CountryState } from '../model/countrystate.model';
import { CountryStateService } from '../service/country-state.service';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit{

  countryList: CountryState[]=[];
  stateList: CountryState[]=[];
  countryCode: string = '';

  constructor(private service: CountryStateService) {} 

  ngOnInit(): void {
      this.loadCountries();
  }

  private loadCountries() {
    this.service.getCountries().subscribe((res) => {
      this.countryList = res;
    })
  }

  countryChange() {
    if(this.countryCode) {
      this.service.getStates(this.countryCode).subscribe(res =>
        this.stateList = res);
    }
  
}
   
  



}
