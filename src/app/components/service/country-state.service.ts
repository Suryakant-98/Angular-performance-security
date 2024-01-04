import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryState } from '../model/countrystate.model';

@Injectable({
  providedIn: 'root',
})
export class CountryStateService {
  constructor(private http: HttpClient) {}
  getCountries() {
    return this.http.get<CountryState[]>('./assets/json/country.json');
  }

  getStates(countryCode: string) {
    return this.http.get<CountryState[]>(`./assets/json/${countryCode}.json`);
  }
}
