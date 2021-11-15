import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../interface/events/event';
import { environment as env } from '../../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  baseUrl : string = 'http://localhost:65535/api';
  search_index: number;

  constructor(private http: HttpClient, private login: LoginService) {
    this.search_index = 0;
  }


  

  search: any[];

  search_arr(data) {
    this.search = data;
  }

  getEvents() {
    return this.http.get<Array<Event>>(`${env.urlAPI}/events`);
  }

  createEvent(event, token) {
    const fData = new FormData();
    fData.append('image', event.image);
    fData.append('description', event.description);
    fData.append('title', event.title);
    fData.append('specialist', localStorage.getItem('specialist'));
    console.log(event.image,event.description,event.title,localStorage.getItem('specialist'))
    let url = `${env.urlAPI}/createEvent?token=${token}`;
    return this.http.post<any>(url, fData);
  }

  editEvent(event, id_Event, token) {
    const fData = new FormData();
    fData.append('image', event.image);
    fData.append('description', event.description);
    fData.append('title', event.title);

    let url = `${env.urlAPI}/updateEvent/${id_Event}?token=${token}`;
    return this.http.post<any>(url, fData);
  }

  deleteEvent(id_Event, token) {
    let url = `${env.urlAPI}/deleteEvent/${id_Event}?token=${token}`;
    return this.http.get<any>(url);
  }

  /* single event */
  idOfEvent: number = 0;

  getOneEvent(index: number) {
    this.idOfEvent = index;
  }
}
