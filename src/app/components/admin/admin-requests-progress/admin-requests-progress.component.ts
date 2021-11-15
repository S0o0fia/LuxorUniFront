import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/request/requests.service';
@Component({
  selector: 'app-admin-requests-progress',
  templateUrl: './admin-requests-progress.component.html',
  styleUrls: ['./admin-requests-progress.component.css'],
})
export class AdminRequestsProgressComponent implements OnInit {
  constructor(private router: Router,private request:RequestsService) {

  }
  allrequest:any
  ngOnInit(): void {
    this.request.getRequest(localStorage.getItem('token')).subscribe(data=>{
      this.allrequest=data
      this.allrequest = this.allrequest.filter(element=>{
        return (element.role_id == Number(localStorage.getItem('role')) && element.status == 1 )
      })
    })
  }
  getRequrstId(id){
    localStorage.setItem('requstId',id);
  }
}
