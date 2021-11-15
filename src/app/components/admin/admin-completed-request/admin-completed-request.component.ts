import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request/requests.service';

@Component({
  selector: 'app-admin-completed-request',
  templateUrl: './admin-completed-request.component.html',
  styleUrls: ['./admin-completed-request.component.css'],
})
export class AdminCompletedRequestComponent implements OnInit {
  constructor(private router: Router,private request:RequestsService) {

  }
  allrequest:any
  ngOnInit(): void {
    this.request.getRequest(localStorage.getItem('token')).subscribe(data=>{
      this.allrequest=data
      this.allrequest = this.allrequest.filter(element=>{
        return (element.role_id == Number(localStorage.getItem('role')) && element.status == 2 )
      })
    })
  }
  getRequrstId(id){
    localStorage.setItem('requstId',id);
  }
}
