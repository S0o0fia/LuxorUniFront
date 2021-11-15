import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Messages } from './../../interface/message/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http :HttpClient) { }

  getMessage(token) {
    let id= localStorage.getItem("requstId");
    return this.http.get<Messages>(`${env.urlAPI}/chat/request/${id}/messages?token=${token}`);
  }

  postMessage(token,message){
    let id = localStorage.getItem("requstId");
    let iduser = localStorage.getItem("idUser");

    let mess = `message=${message}&sender_id=${iduser}`;
    console.log(mess)
    let url =`${env.urlAPI}/chat/request/${id}/message?${mess}&token=${token}`
    return this.http.post<any>(url, null);
  }

  finishMessage(token) {
    let id= localStorage.getItem("requstId");
    return this.http.get<Messages>(`${env.urlAPI}/chat/request/${id}?token=${token}`);
  }

}
