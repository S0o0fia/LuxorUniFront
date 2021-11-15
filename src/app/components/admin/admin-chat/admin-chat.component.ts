import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/message/messages.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css'],
})
export class AdminChatComponent implements OnInit {
  constructor(private router: Router, private message: MessagesService) {}

  arr: any;
  idUser: number = Number(localStorage.getItem('idUser'));

  ngOnInit(): void {
    this.message.getMessage(localStorage.getItem('token')).subscribe((data) => {
      this.arr = data;
      this.arr = this.arr.reverse();
    });
  }

  sendMessage(messageing) {
    this.message
      .postMessage(localStorage.getItem('token'), messageing.value)
      .subscribe((data) => {
        location.reload()
      });
  }

  finishMessage() {
    this.message.finishMessage(localStorage.getItem('token')).subscribe(data=>{
      console.log(data)
      location.reload()
    })
  }
}
