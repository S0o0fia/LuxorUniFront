import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  constructor(private loginRole: LoginService) {}

  ngOnInit(): void {
    setTimeout(() => {
      localStorage.clear()
      location.reload()
    }, 7200000 );
  }

  hidden_admin: boolean = Boolean(localStorage.getItem('hidden_admin'))
  hidden_instructor: boolean = Boolean(localStorage.getItem('hidden_instructor'))
  hidden_mediacenter_university: boolean = Boolean(localStorage.getItem('hidden_mediacenter_university'))
  hidden_support_university: boolean = Boolean(localStorage.getItem('hidden_support_university'))

  removeToken() {
    localStorage.clear()
  }
}
