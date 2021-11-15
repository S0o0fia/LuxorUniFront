import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Counter } from 'src/app/interface/counters/counter';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private http: HttpClient) {}

  counters: Array<Counter>;

  getCounter() {
    return this.http.get<Counter>(`${env.urlAPI}/counter`);
  }
}
