import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Requests } from './../../interface/request/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http :HttpClient) { }

  getRequest(token) {
    return this.http.get<Requests>(`${env.urlAPI}/chat/requests?token=${token}`);
  }

}
