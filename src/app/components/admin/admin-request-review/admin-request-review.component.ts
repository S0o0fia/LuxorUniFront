import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/request/requests.service';

@Component({
  selector: 'app-admin-request-review',
  templateUrl: './admin-request-review.component.html',
  styleUrls: ['./admin-request-review.component.css'],
})
export class AdminRequestReviewComponent implements OnInit {
  constructor(private router: Router,private request:RequestsService) {
  }

  allrequest:any
  ngOnInit(): void {
    this.request.getRequest(localStorage.getItem('token')).subscribe(data=>{
      this.allrequest=data
      this.allrequest = this.allrequest.filter(element=>{
        return (element.role_id == Number(localStorage.getItem('role')) && element.status == 0 )
      })
    })
  }

  getRequrstId(id){
    localStorage.setItem('requstId',id);
  }
}
