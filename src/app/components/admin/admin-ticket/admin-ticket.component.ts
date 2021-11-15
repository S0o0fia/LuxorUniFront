import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/request/requests.service';

@Component({
  selector: 'app-admin-ticket',
  templateUrl: './admin-ticket.component.html',
  styleUrls: ['./admin-ticket.component.css'],
})
export class AdminTicketComponent implements OnInit {
  constructor(private router: Router, private request: RequestsService) {
    if (
      Boolean(localStorage.getItem('hidden_instructor')) ||
      Boolean(localStorage.getItem('hidden_mediacenter_university'))
    ) {
      router.navigate(['/academic-affairs/login']);
    }
  }

  allrequest: any;
  lengthOfRequrestStatusOne: number = 0;
  lengthOfRequrestStatustwo: number = 0;
  lengthOfRequrestStatusthree: number = 0;

  ngOnInit(): void {
    this.request.getRequest(localStorage.getItem('token')).subscribe((data) => {
      this.allrequest = data;
      this.allrequest = this.allrequest.filter((element) => {
        return element.role_id == Number(localStorage.getItem('role'));
      });
      this.allrequest.forEach((element) => {
        if (element.status == 0) this.lengthOfRequrestStatusOne++;
        if (element.status == 1) this.lengthOfRequrestStatustwo++;
        if (element.status == 2) this.lengthOfRequrestStatusthree++;
      });
    });
  }
}
